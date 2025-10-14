// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";
import fs from "fs";
import Config from "@/app/config";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, phone, captchaToken, action } =
      await req.json();

    if (!captchaToken) {
      return NextResponse.json(
        { success: false, message: "Captcha missing" },
        { status: 400 }
      );
    }

    // Guardar request.json opcionalmente (solo para pruebas)
    const requestBody = {
      event: {
        token: captchaToken,
        expectedAction: action || "contact_form",
        siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
      },
    };
    // fs.writeFileSync("request.json", JSON.stringify(requestBody, null, 2));

    // Llamada a Google reCAPTCHA Enterprise
    // const verifyRes = await fetch(
    //   `https://recaptchaenterprise.googleapis.com/v1/projects/YOUR_PROJECT_ID/assessments?key=${process.env.RECAPTCHA_API_KEY}`,
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(requestBody),
    //   }
    // );

    // const captchaData = await verifyRes.json();
    // console.log("CaptchaData:", captchaData);

    // if (
    //   !captchaData.tokenProperties?.valid ||
    //   (captchaData.score && captchaData.score < 0.3)
    // ) {
    //   return NextResponse.json(
    //     { success: false, message: "Captcha verification failed" },
    //     { status: 400 }
    //   );
    // }

    // // Enviar Email con EmailJS
    // await emailjs.send(Config.emailjs.serviceId, Config.emailjs.templateId, {
    //   name,
    //   email,
    //   message,
    //   phone,
    // });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
