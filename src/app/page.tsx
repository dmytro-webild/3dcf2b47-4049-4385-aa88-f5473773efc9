"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "home" },
        { name: "Services", id: "services" },
        { name: "Why Us", id: "why" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Book Now", id: "contact" },
      ]}
      brandName="Simon Lee"
      button={{ text: "Book Now", href: "#contact" }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardCarousel
      background={{ variant: "plain" }}
      title="Consultant-Led. Clinically Superior. Honest."
      description="Expert aesthetic medicine guided by Mr Simon Lee, Consultant Plastic Surgeon. Best-in-class technology, superior results, impartial advice—always."
      buttons={[
        { text: "Schedule Consultation", href: "#contact" },
        { text: "Explore Services", href: "#services" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/3d-contemporary-living-room-interior-modern-furniture_1048-8654.jpg", imageAlt: "Aesthetic Clinic Interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/doctor-gives-medical-document-patient_482257-119276.jpg", imageAlt: "Mr Simon Lee" },
        { imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-getting-lip-filler-with-injection_23-2149313539.jpg", imageAlt: "Fillers Treatment" },
        { imageSrc: "http://img.b2bpic.net/free-photo/massage-face_1098-21971.jpg", imageAlt: "Vein Treatment" },
        { imageSrc: "http://img.b2bpic.net/free-photo/person-getting-micro-needling-beauty-treatment_23-2149334260.jpg", imageAlt: "Microneedling" },
        { imageSrc: "http://img.b2bpic.net/free-photo/dermatologist-examining-skin-patient-with-dermatoscope_107420-65602.jpg", imageAlt: "Skin Procedures" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "s1", name: "Dermal Fillers", price: "Expert Led", imageSrc: "http://img.b2bpic.net/free-photo/girl-receiving-facial-treatment-beauty-salon_23-2148194222.jpg" },
        { id: "s2", name: "Sclerotherapy", price: "Expert Led", imageSrc: "http://img.b2bpic.net/free-photo/covid-vaccine-fight-illness_23-2149134129.jpg" },
        { id: "s3", name: "Micro-needling", price: "Expert Led", imageSrc: "http://img.b2bpic.net/free-photo/close-up-face-young-woman-relaxing-gentle_158595-4581.jpg" },
        { id: "s4", name: "Skin Tag Removal", price: "Expert Led", imageSrc: "http://img.b2bpic.net/free-photo/female-doctor-diagnosing-melanoma-body-female-patient_23-2149365783.jpg" },
        { id: "s5", name: "Non-Surgical Procedures", price: "Expert Led", imageSrc: "http://img.b2bpic.net/free-photo/spa-massage_1098-21968.jpg" },
        { id: "s6", name: "Consultations", price: "Expert Led", imageSrc: "http://img.b2bpic.net/free-photo/female-doctor-using-digital-tablet-consult-patient_107420-65396.jpg" },
      ]}
      title="Premium Aesthetic Services"
      description="Comprehensive non-invasive cosmetic procedures led by our consultant plastic surgeon."
    />
  </div>

  <div id="why" data-section="why">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Why Simon Lee Clinic?"
      description="We don't compete on price. We compete on results, technology, and clinical knowledge."
      accordionItems={[
        { id: "a1", title: "Consultant Plastic Surgeon", content: "Led by Mr Simon Lee, with expertise far exceeding standard aesthetics practitioners." },
        { id: "a2", title: "Best-in-Class Technology", content: "Equipment and systems ahead of the UK aesthetic standard." },
        { id: "a3", title: "Impartial, Honest Advice", content: "No upselling. Ever. We recommend only what you genuinely need." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/laser-epilation-hair-removal-therapy_1303-23497.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Pinnacle of Aesthetic Medicine"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Georgia T.", imageSrc: "http://img.b2bpic.net/free-photo/beautician-woman-clinic-consults-client_23-2148878890.jpg" },
        { id: "t2", name: "Elisabeta L.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-doctor-using-desktop-pc_107420-65116.jpg" },
        { id: "t3", name: "Alexandra V.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-fair-skinned-women-use-moisturizing-day-cream-sensitive-skin-light-room-self-care-health-day-concept_197531-31471.jpg" },
        { id: "t4", name: "Hollie L.", imageSrc: "http://img.b2bpic.net/free-photo/accompaniment-abortion-process_23-2149656036.jpg" },
        { id: "t5", name: "Charlotte N.", imageSrc: "http://img.b2bpic.net/free-photo/woman-checking-her-skin-mirror-after-receiving-cosmetic-treatment_107420-74036.jpg" },
      ]}
      cardTitle="What Our Clients Say"
      cardTag="Reviews"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Schedule Consultation"
      description="Experience consultant-led excellence."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true },
      ]}
      textarea={{ name: "message", placeholder: "How can we help?", rows: 4 }}
      imageSrc="http://img.b2bpic.net/free-photo/client-beautician-s-appointment-consultation-face-shaping-preparation-upcoming-procedures-visual-examination-problem-areas_343596-4183.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "About", href: "#home" }, { label: "Services", href: "#services" }] },
        { items: [{ label: "Contact", href: "#contact" }, { label: "Booking", href: "#contact" }] },
        { items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
      logoText="Simon Lee"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}