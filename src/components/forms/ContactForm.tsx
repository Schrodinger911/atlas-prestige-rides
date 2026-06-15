import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitInquiry } from "@/lib/api/inquiries.functions";
import { vehicles } from "@/content/fleet";
import { Loader2, Send } from "lucide-react";

interface Props {
  defaultVehicle?: string;
}

export function ContactForm({ defaultVehicle }: Props) {
  const send = useServerFn(submitInquiry);
  const [submitting, setSubmitting] = useState(false);
  const [vehicle, setVehicle] = useState<string>(defaultVehicle ?? "");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);
    try {
      const result = await send({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          vehicleSlug: vehicle,
          pickupDate: String(fd.get("pickupDate") ?? ""),
          returnDate: String(fd.get("returnDate") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      if (result.ok) {
        toast.success("Thank you. Our concierge will contact you shortly.");
        form.reset();
        setVehicle("");
      } else {
        toast.error(result.error);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required minLength={2} maxLength={100} placeholder="Sofia El Mansouri" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required maxLength={255} placeholder="you@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" type="tel" maxLength={40} placeholder="+212 …" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="vehicle">Vehicle of interest</Label>
          <Select value={vehicle} onValueChange={setVehicle}>
            <SelectTrigger id="vehicle">
              <SelectValue placeholder="Any vehicle" />
            </SelectTrigger>
            <SelectContent>
              {vehicles.map((v) => (
                <SelectItem key={v.slug} value={v.slug}>
                  {v.brand} {v.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="pickupDate">Pick-up date</Label>
          <Input id="pickupDate" name="pickupDate" type="date" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="returnDate">Return date</Label>
          <Input id="returnDate" name="returnDate" type="date" />
        </div>
        <div className="sm:col-span-2 space-y-2">
          <Label htmlFor="message">How can we help?</Label>
          <Textarea
            id="message"
            name="message"
            required
            minLength={5}
            maxLength={2000}
            rows={5}
            placeholder="Tell us about your trip — pickup point, dates, any preferences."
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-xs font-medium uppercase tracking-[0.24em] text-primary-foreground transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {submitting ? "Sending" : "Send inquiry"}
      </button>
    </form>
  );
}