const axios = require("axios");

// npm install form-data
const FormData = require("form-data");
const url = process.env.beta

export default async function handler(req: any, res:any) {
  if (req.method === "POST") {
    const { title, email, message, attachment } = req.body;
    if (attachment) {
      const buffer = Buffer.from(attachment.split(",")[1], "base64");
      const formData = new FormData();
      formData.append("file", buffer, "attachment.png");
      formData.append(
          "content",
          `
          **Beggar's discord tag/username**:\n${title}
          \n\n**Beggar's email**: ${email}
          \n\n**Beggar's reason**:\n${message}`
      );
      await axios
        .post(url, formData, {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          },
        })
        .then((response: any) => {
          res.status(200).json({ success: true });
        })
        .catch((error: any) => {
          res.status(500).json({ error: error.message });
        });
    } else {
      await axios
        .post(url, {
          "embeds": [{
            "fields": [
              {
                "name": "Beggar's discord tag",
                "value": title,
                "inline": true
              },
              {
                "name": "Beggar's email",
                "value": email,
                "inline": true
              },
              {
                "name": "Beggar's reason",
                "value": message
              }
            ],
            "color": "14177041"
          }]
        })
        .then((response: any) => {
          res.status(200).json({ success: true });
        })
        .catch((error: any) => {
          res.status(500).json({ error: error.message });
        });
    }
  } else {
    res.status(405).json({ success: false });
  }
}