import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Service = {
  title: string;
  description: string;
  icon: string;
};

type Benefit = {
  title: string;
  description: string;
  icon: string;
};

type Faq = {
  question: string;
  answer: string;
};

const heroImages = [
  require("./assets/images/student-success.jpg"),
  require("./assets/images/family-immigration.jpg"),
  require("./assets/images/sydney-opera.jpg"),
  require("./assets/images/working-in-aus.jpg"),
  require("./assets/images/graduation.jpg"),
  require("./assets/images/beach.jpg"),
];

const services: Service[] = [
  {
    title: "Student Visas",
    description:
      "Full support for subclass 500, GTE requirements, and pathways after graduation.",
    icon: "🎓",
  },
  {
    title: "Skilled Migration",
    description:
      "189, 190, 491 visas with points strategy and EOI lodgement guidance.",
    icon: "🧭",
  },
  {
    title: "Partner Visas",
    description:
      "Onshore and offshore partner applications with complete evidence preparation.",
    icon: "❤️",
  },
  {
    title: "Business & Investor Visas",
    description:
      "Migration pathways for entrepreneurs and investors moving to Australia.",
    icon: "💼",
  },
  {
    title: "Permanent Residency",
    description:
      "Long-term planning from temporary visa to PR and citizenship readiness.",
    icon: "🇦🇺",
  },
];

const benefits: Benefit[] = [
  {
    title: "Registered Migration Agents",
    description:
      "MARA-registered professionals with deep expertise in immigration law.",
    icon: "✅",
  },
  {
    title: "10,000+ Successful Applications",
    description: "Over a decade of experience across multiple visa categories.",
    icon: "📈",
  },
  {
    title: "Sydney-Based, Globally Connected",
    description: "Local Australian insight with service for clients worldwide.",
    icon: "🌏",
  },
  {
    title: "End-to-End Support",
    description:
      "From document preparation to lodgement and settlement guidance.",
    icon: "🤝",
  },
];

const faqs: Faq[] = [
  {
    question: "How long does a student visa take?",
    answer:
      "Typical processing is around 4–8 weeks, depending on documentation and case complexity.",
  },
  {
    question: "Can I apply for PR after studying?",
    answer:
      "Yes. Many pathways include graduate visas and skilled migration options toward PR.",
  },
  {
    question: "Are you MARA registered?",
    answer:
      "Yes. Our advisers are registered and follow current migration law and standards.",
  },
];

const sectionTitle = (title: string, subtitle?: string) => (
  <View style={styles.sectionHead}>
    {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.navbar}>
          <Text style={styles.brand}>Blue Water Study</Text>
          <Pressable style={styles.navCta}>
            <Text style={styles.navCtaText}>Book Consultation</Text>
          </Pressable>
        </View>

        <View style={styles.hero}>
          <Text style={styles.badge}>Trusted Sydney Migration Experts</Text>
          <Text style={styles.heroTitle}>Your Australian Dream Starts Here</Text>
          <Text style={styles.heroText}>
            Blue Water Study guides students, professionals, and families through each step
            of the Australian immigration process — from visa applications to permanent residency.
          </Text>
          <View style={styles.heroActions}>
            <Pressable style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Book Free Consultation</Text>
            </Pressable>
            <Pressable style={styles.secondaryBtn}>
              <Text style={styles.secondaryBtnText}>Learn More</Text>
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.heroGallery}>
            {heroImages.map((source, idx) => (
              <Image
                key={idx}
                source={source}
                style={styles.heroImage}
                contentFit="cover"
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          {sectionTitle("10,000+ successful visa applications since 2010", "Why clients trust us")}
          {benefits.map((item, idx) => (
            <View key={idx} style={styles.card}>
              <Text style={styles.cardIcon}>{item.icon}</Text>
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          {sectionTitle("Expert Visa Guidance for Every Journey", "Our Services")}
          {services.map((service, idx) => (
            <View key={idx} style={styles.serviceCard}>
              <Text style={styles.serviceIcon}>{service.icon}</Text>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceText}>{service.description}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          {sectionTitle("Simple steps to your Australian visa", "Our Process")}
          {[
            "Free Initial Consultation",
            "Document Preparation",
            "Application Lodgement",
            "Visa Grant & Settlement Guidance",
          ].map((step, idx) => (
            <View key={step} style={styles.stepRow}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>{idx + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Start Your Australian Journey</Text>
          <Text style={styles.ctaText}>
            Book your free consultation and speak with a migration specialist today.
          </Text>
          <Pressable style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Book Free Consultation</Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          {sectionTitle("Common Questions")}
          {faqs.map((faq) => (
            <View key={faq.question} style={styles.faqCard}>
              <Text style={styles.faqQ}>{faq.question}</Text>
              <Text style={styles.faqA}>{faq.answer}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerBrand}>Blue Water Study</Text>
          <Text style={styles.footerText}>
            © 2026 Blue Water Study. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    paddingBottom: 32,
  },
  navbar: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#dbeafe",
  },
  logo: {
    width: 140,
    height: 32,
  },
  brand: {
    color: "#00247D",
    fontSize: 21,
    fontWeight: "800",
  },
  navCta: {
    backgroundColor: "#00247D",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  navCtaText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
  hero: {
    padding: 20,
    gap: 14,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#dbeafe",
    color: "#1e3a8a",
    fontWeight: "700",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    fontSize: 12,
  },
  heroTitle: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "800",
    color: "#0f172a",
  },
  heroText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#475569",
  },
  heroActions: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
  primaryBtn: {
    backgroundColor: "#00247D",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "700",
  },
  secondaryBtn: {
    backgroundColor: "#fff",
    borderColor: "#cbd5e1",
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  secondaryBtnText: {
    color: "#0f172a",
    fontWeight: "700",
  },
  heroGallery: {
    paddingTop: 6,
    gap: 10,
  },
  heroImage: {
    width: 210,
    height: 300,
    borderRadius: 18,
    backgroundColor: "#e2e8f0",
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
    gap: 10,
  },
  sectionHead: {
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: "#1d4ed8",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  sectionTitle: {
    color: "#0f172a",
    fontSize: 26,
    lineHeight: 32,
    fontWeight: "800",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 14,
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
  cardIcon: {
    fontSize: 20,
    marginTop: 1,
  },
  cardBody: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#0f172a",
  },
  cardText: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
  },
  serviceCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 14,
    gap: 6,
  },
  serviceIcon: {
    fontSize: 20,
  },
  serviceTitle: {
    color: "#0f172a",
    fontWeight: "800",
    fontSize: 17,
  },
  serviceText: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 12,
  },
  stepBadge: {
    width: 26,
    height: 26,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dbeafe",
  },
  stepBadgeText: {
    color: "#1e3a8a",
    fontWeight: "800",
    fontSize: 13,
  },
  stepText: {
    color: "#0f172a",
    fontWeight: "600",
    flex: 1,
    fontSize: 15,
  },
  ctaSection: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#00247D",
    padding: 20,
    gap: 8,
  },
  ctaTitle: {
    color: "#fff",
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "800",
  },
  ctaText: {
    color: "#dbeafe",
    fontSize: 15,
    lineHeight: 22,
  },
  ctaButton: {
    marginTop: 6,
    alignSelf: "flex-start",
    backgroundColor: "#FFCD00",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  ctaButtonText: {
    color: "#0f172a",
    fontWeight: "800",
    fontSize: 13,
  },
  faqCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    padding: 14,
    gap: 6,
  },
  faqQ: {
    color: "#0f172a",
    fontWeight: "700",
    fontSize: 16,
  },
  faqA: {
    color: "#475569",
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    marginTop: 20,
    backgroundColor: "#001A5E",
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    gap: 10,
  },
  footerLogo: {
    width: 180,
    height: 36,
  },
  footerBrand: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "800",
  },
  footerText: {
    color: "#cbd5e1",
    fontSize: 12,
  },
});
