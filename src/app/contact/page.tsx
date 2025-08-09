import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm"; 

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 text-center">
      <SectionHeader
        title="Contact Us"
        description={"Have questions or want to get involved? Drop us a line."} 
      />

      <ContactForm /> 
    </div>
  );
}