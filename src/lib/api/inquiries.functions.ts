import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  vehicleSlug: z.string().trim().max(80).optional().or(z.literal("")),
  pickupDate: z.string().trim().max(20).optional().or(z.literal("")),
  returnDate: z.string().trim().max(20).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(2000),
});

export type InquiryInput = z.infer<typeof InquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: InquiryInput) => InquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_inquiries").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      vehicle_slug: data.vehicleSlug || null,
      pickup_date: data.pickupDate || null,
      return_date: data.returnDate || null,
      message: data.message,
    });
    if (error) {
      console.error("[submitInquiry] insert failed", error);
      return { ok: false as const, error: "We couldn't save your inquiry. Please try again or call us." };
    }
    return { ok: true as const };
  });