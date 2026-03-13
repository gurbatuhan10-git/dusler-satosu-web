import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, childAge, campus, source } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "İsim ve telefon zorunludur." },
        { status: 400 }
      );
    }

    // TODO: Gerçek entegrasyon — aşağıdakilerden birini aktif edin:
    // 1. E-posta gönderimi (nodemailer veya Resend)
    // 2. Google Sheets API
    // 3. CRM webhook (HubSpot, Salesforce vb.)
    // 4. Slack/Discord webhook

    // Şimdilik console'a logla (Vercel Functions loglarında görünür)
    console.log("Yeni randevu talebi:", {
      name,
      phone,
      childAge: childAge || "Belirtilmedi",
      campus: campus || "Belirtilmedi",
      source,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Randevu talebiniz alındı." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Bir hata oluştu." },
      { status: 500 }
    );
  }
}
