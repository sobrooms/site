import NextAuth from 'next-auth'
import DiscordProvider from "next-auth/providers/discord";
const options = {
  options: [],
  providers: [
    DiscordProvider({
      clientId: process.env.did,
      clientSecret: process.env.dsec,
      authorization: { params: { scope: 'identify email guilds connections guilds.members.read' } },
    }),
  ],
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 200 * 24 * 60 * 60,

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours

    // generate a session id
    generateSessionToken: () => {
      let r = Math.random().toString(36).slice(2)
      return r
    }
  },
  pages: {
    signIn: '/account/login',
    signOut: '/account/logout',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl)
    },
  }
}
export default (req, res)=> NextAuth(req, res, options) 