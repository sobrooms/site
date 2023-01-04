import { useRouter } from 'next/router';
import styles from "../styles/Beg.module.css";
import { useState, useRef } from "react";
import axios from "axios";
import Head from 'next/head';
import Link from "next/link";
export default function useMs() {
  const router = useRouter()
  const { name } = router.query;
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const formRef: any = useRef(null);

  function convertToBase64(file: any) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  async function sendMessage() {

    const params = {
      title: title,
      email: email,
      message: message,
      attachment: image,
    };

    try {
      const cdTime = Date.now() + 1000 * 60 * 60 * 4
      const mcd = cdTime.toString();
      const cdsm: any = localStorage.getItem("didnatsabeg");
      const ttbi = parseInt(cdsm);
      if (ttbi > Date.now()) {
        const res = await axios.post("/api/beg_handler", params)
        if (res.status === 200) {
          alert("Begged successfully!");
          setMessage("");
          setEmail("");
          setTitle("");
          localStorage.setItem("didnatsabeg", mcd)
          formRef.current.value = null;
        } else {
          alert("Something went wrong, please try again later.");
        }
      } else {
        alert("You have hit begging cooldown")
      }
    } catch (error) {
      alert(
        "An error occured while trying to send. Try submitting it again. Error: " + error
      );
    }
  }
  function confirmSend(e: any) {
    e.preventDefault();
    let confirmed = confirm("Are you sure you would like to send?");
    if (confirmed == true) {
      sendMessage();
    }
    if (confirmed == false) {
      alert("Canceled beg.");
    }
  }

  if (name === "begforbeta") {
    if (process.browser) {
      const handleImage = async (e: any) => {
        const file = e.target.files[0];
        const base64: any = await convertToBase64(file);
        // check if image exeed 1mb
        if (base64.length > 950000) {
          alert("Image size must be less than 1 megabyte.");
          e.target.value = "";
          return;
        }
        setImage(base64);
      };
      return (
        <>
          <div className={styles.container}>
            <Head>
              <title>beg</title>
              <meta name="description" content="Beg for beta" />
              <meta name="theme-color" content="#5284d9" />
              <link rel="shortcut icon" href="../public/favicon.png" />
            </Head>
            <br />
            <h1 className={styles.title}>Beg for beta</h1>
            <p className={styles.description}>Beg for beta/frontrooms invite link/middlerooms invite link</p>
            <main className={styles.main}>
              <form id="forms" onSubmit={confirmSend}>
                <label htmlFor="email" className={styles.typeOfInfo}>
                  Email Address
                </label>
                <br />
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={styles.bugEmailField}
                  required
                  placeholder="Your email. Please put in your REAL email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <p></p>
                <label htmlFor="title" className={styles.typeOfInfo}>
                  Your discord tag
                </label>
                <br />
                <input
                  id="title"
                  name="title"
                  className={styles.bugTitleField}
                  placeholder="Discord tag. Not the discriminator. (ex. rrryfoo#8618)"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <p></p>
                <label htmlFor="text" className={styles.typeOfInfo}>
                  Why
                </label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  className={styles.bugDescriptionField}
                  required
                  placeholder="WHy do you want beta"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
                <br />
                <label htmlFor="image" className={styles.typeOfInfo}>
                  Image (png/jpeg only)
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/png, image/jpeg"
                  className={styles.bugImageField}
                  onChange={handleImage}
                  ref={formRef}
                />
                <br />
                <button type="submit" className={styles.buttonSubmit}>
                  Beg &rarr;
                </button>

                <p></p>

                <Link href="./">Go back to main page &larr;</Link>
              </form>
            </main>
          </div>
        </>
      );
    } else {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
          <Head>
            <title>sobroo - page disabled</title>
            <link rel="icon" href="/favicon.png" />
          </Head>

          <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <h1 className="text-4xl font-bold">
              This page is disabled
            </h1>
            <p className="text-4xl">
              This page has been disabled due to spam
            </p>
            <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
              <Link
                href="/"
              >
                <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                  <h3 className="text-2xl font-bold">go back &larr;</h3>
                  <p className="mt-4 text-xl">
                    go back to main page
                  </p>
                </div>
              </Link>
            </div>
          </main>
        </div>
      )
    }
  } else if (name === "discord") {
    if (process.browser) {
      router.push("https://discord.gg/ruVzdxWMUP")
    }
  } else if (name === "github") {
    if (process.browser) {
      router.push("https://github.com/sobrooms");
    }
  } else {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <h1 className="text-4xl font-bold">
            item not found
          </h1>
          <p className="text-4xl">
            the item &quot;{name}&quot; is not a valid item name
          </p>
          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <Link
              href="/"
            >
              <div className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">go back &larr;</h3>
                <p className="mt-4 text-xl">
                  go back to main page
                </p>
              </div>
            </Link>
          </div>
        </main>
      </div>
    )
  }
}