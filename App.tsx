import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import {
  type DimensionValue,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
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

const COLORS = {
  background: "#ffffff",
  heading: "#061b31",
  body: "#64748d",
  label: "#273951",
  primary: "#533afd",
  primaryHover: "#4434d4",
  border: "#e5edf5",
  borderPurple: "#b9b9f9",
  darkSection: "#1c1e54",
  ruby: "#ea2261",
  magenta: "#f96bee",
  magentaSoft: "#ffd7ef",
};

const SHADOW = {
  shadowColor: "#32325d",
  shadowOffset: { width: 0, height: 18 },
  shadowOpacity: 0.2,
  shadowRadius: 18,
  elevation: 6,
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
  const { width } = useWindowDimensions();
  const isTablet = width >= 640;
  const isDesktop = width >= 1024;
  const containerWidth = {
    maxWidth: 1080,
    width: "100%" as DimensionValue,
    alignSelf: "center" as const,
  };
  const heroSize = isDesktop ? 48 : isTablet ? 40 : 32;
  const heroTracking = isDesktop ? -0.96 : isTablet ? -0.72 : -0.45;
  const sectionTitleSize = isDesktop ? 32 : isTablet ? 28 : 24;
  const serviceCardWidth = isDesktop ? "31.5%" : isTablet ? "48.5%" : "100%";

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.navbarWrap}>
          <View style={[styles.navbar, containerWidth]}>
            <Text style={styles.brand}>Blue Water Study</Text>
            {isTablet ? (
              <View style={styles.navLinks}>
                <Text style={styles.navLinkText}>Services</Text>
                <Text style={styles.navLinkText}>Process</Text>
                <Text style={styles.navLinkText}>FAQ</Text>
              </View>
            ) : null}
            <Pressable style={styles.navCta}>
              <Text style={styles.navCtaText}>Start now</Text>
            </Pressable>
          </View>
        </View>

        <View style={[styles.heroSection, containerWidth]}>
          <View style={styles.heroDecorationA} />
          <View style={styles.heroDecorationB} />
          <View style={styles.heroContent}>
            <Text style={styles.badge}>Stripe-inspired migration platform</Text>
            <Text
              style={[
                styles.heroTitle,
                {
                  fontSize: heroSize,
                  letterSpacing: heroTracking,
                  lineHeight: Math.round(heroSize * 1.08),
                },
              ]}
            >
              Your Australian dream, engineered with precision.
            </Text>
            <Text style={styles.heroText}>
              Blue Water Study helps students, professionals, and families navigate every
              migration milestone with confidence — from first consultation to long-term
              residency strategy.
            </Text>
            <View style={styles.heroActions}>
              <Pressable style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Start now</Text>
              </Pressable>
              <Pressable style={styles.ghostBtn}>
                <Text style={styles.ghostBtnText}>Contact sales</Text>
              </Pressable>
            </View>
            <View style={styles.codeBlock}>
              <Text style={styles.codeLabel}>PROCESSING_ESTIMATE</Text>
              <Text style={styles.codeValue}>04 - 08 WEEKS</Text>
            </View>
          </View>

          <View style={styles.heroPreview}>
            <View style={[styles.heroLeadImageWrap, SHADOW]}>
              <Image
                source={heroImages[0]}
                style={styles.heroLeadImage}
                contentFit="cover"
              />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.heroGallery}
            >
              {heroImages.slice(1).map((source, idx) => (
                <Image key={idx} source={source} style={styles.heroImage} contentFit="cover" />
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={[styles.section, containerWidth]}>
          {sectionTitle("10,000+ successful visa applications since 2010", "Why teams choose us")}
          <View style={styles.cardsWrap}>
            {benefits.map((item, idx) => (
              <View key={idx} style={[styles.card, SHADOW, { width: serviceCardWidth }]}>
                <Text style={styles.cardIcon}>{item.icon}</Text>
                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardText}>{item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.section, containerWidth]}>
          {sectionTitle("Expert visa guidance for every migration pathway", "Services")}
          <View style={styles.cardsWrap}>
            {services.map((service, idx) => (
              <View key={idx} style={[styles.serviceCard, SHADOW, { width: serviceCardWidth }]}>
                <Text style={styles.serviceIcon}>{service.icon}</Text>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceText}>{service.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.section, containerWidth]}>
          {sectionTitle("Simple steps to your Australian visa", "Process")}
          {[
            "Free Initial Consultation",
            "Document Preparation",
            "Application Lodgement",
            "Visa Grant & Settlement Guidance",
          ].map((step, idx) => (
            <View key={step} style={[styles.stepRow, SHADOW]}>
              <View style={styles.stepBadge}>
                <Text style={styles.stepBadgeText}>{idx + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>

        <View style={styles.darkSectionWrap}>
          <View style={[styles.darkSection, containerWidth]}>
            <Text style={styles.darkEyebrow}>Built for ambitious moves</Text>
            <Text style={styles.darkTitle}>Start your Australian journey with confidence.</Text>
            <Text style={styles.darkText}>
              Dedicated advisers, precise documentation workflows, and transparent timelines —
              all in one migration experience.
            </Text>
            <View style={styles.darkActions}>
              <Pressable style={styles.darkPrimaryBtn}>
                <Text style={styles.darkPrimaryText}>Start now</Text>
              </Pressable>
              <Pressable style={styles.darkGhostBtn}>
                <Text style={styles.darkGhostText}>Talk to sales</Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View style={[styles.section, containerWidth]}>
          {sectionTitle("Common Questions")}
          {faqs.map((faq) => (
            <View key={faq.question} style={[styles.faqCard, SHADOW]}>
              <Text style={styles.faqQ}>{faq.question}</Text>
              <Text style={styles.faqA}>{faq.answer}</Text>
            </View>
          ))}
        </View>

        <View style={styles.footerWrap}>
          <View style={[styles.footer, containerWidth]}>
            <Text style={styles.footerBrand}>Blue Water Study</Text>
            <Text style={styles.footerText}>© 2026 Blue Water Study. All rights reserved.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    paddingBottom: 56,
    backgroundColor: COLORS.background,
  },
  navbarWrap: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: "rgba(255,255,255,0.97)",
  },
  navbar: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
  },
  brand: {
    color: COLORS.heading,
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: -0.22,
    flexShrink: 0,
  },
  navLinks: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginHorizontal: 10,
  },
  navLinkText: {
    color: COLORS.heading,
    fontSize: 14,
    fontWeight: "400",
  },
  navCta: {
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  navCtaText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 18,
    position: "relative",
  },
  heroDecorationA: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 220,
    right: -80,
    top: -24,
    backgroundColor: "rgba(249,107,238,0.14)",
  },
  heroDecorationB: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 160,
    left: -70,
    top: 140,
    backgroundColor: "rgba(234,34,97,0.1)",
  },
  heroContent: {
    gap: 12,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.magentaSoft,
    color: COLORS.heading,
    fontWeight: "400",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.magentaSoft,
    fontSize: 11,
  },
  heroTitle: {
    fontWeight: "300",
    color: COLORS.heading,
  },
  heroText: {
    fontSize: 18,
    lineHeight: 25,
    color: COLORS.body,
    fontWeight: "300",
  },
  heroActions: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 6,
  },
  primaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 16,
  },
  ghostBtn: {
    backgroundColor: "transparent",
    borderColor: COLORS.borderPurple,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  ghostBtnText: {
    color: COLORS.primary,
    fontWeight: "400",
    fontSize: 16,
  },
  codeBlock: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
  },
  codeLabel: {
    color: COLORS.label,
    fontSize: 11,
    marginBottom: 2,
    fontFamily: Platform.select({ ios: "Menlo", android: "monospace", default: "monospace" }),
  },
  codeValue: {
    color: COLORS.heading,
    fontSize: 12,
    fontVariant: ["tabular-nums"],
    letterSpacing: -0.3,
    fontFamily: Platform.select({ ios: "Menlo", android: "monospace", default: "monospace" }),
  },
  heroPreview: {
    marginTop: 20,
    gap: 10,
  },
  heroLeadImageWrap: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  heroLeadImage: {
    width: "100%",
    height: 240,
  },
  heroGallery: {
    gap: 10,
    paddingTop: 2,
  },
  heroImage: {
    width: 170,
    height: 120,
    borderRadius: 6,
    backgroundColor: "#eef3f8",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 6,
    gap: 10,
  },
  sectionHead: {
    marginBottom: 12,
  },
  sectionSubtitle: {
    color: COLORS.label,
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  sectionTitle: {
    color: COLORS.heading,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: "300",
    letterSpacing: -0.64,
  },
  cardsWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    flexDirection: "row",
    gap: 10,
    alignItems: "flex-start",
  },
  cardIcon: {
    fontSize: 19,
    marginTop: 1,
  },
  cardBody: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: -0.22,
    color: COLORS.heading,
  },
  cardText: {
    color: COLORS.body,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "300",
  },
  serviceCard: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    gap: 6,
  },
  serviceIcon: {
    fontSize: 20,
  },
  serviceTitle: {
    color: COLORS.heading,
    fontWeight: "300",
    fontSize: 22,
    letterSpacing: -0.22,
  },
  serviceText: {
    color: COLORS.body,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "300",
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
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
    color: COLORS.heading,
    fontWeight: "300",
    flex: 1,
    fontSize: 18,
    letterSpacing: -0.22,
  },
  darkSectionWrap: {
    marginTop: 24,
    backgroundColor: COLORS.darkSection,
  },
  darkSection: {
    paddingHorizontal: 20,
    paddingVertical: 42,
  },
  darkEyebrow: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  darkTitle: {
    color: "#ffffff",
    fontSize: 32,
    lineHeight: 35,
    letterSpacing: -0.64,
    fontWeight: "300",
    marginBottom: 8,
  },
  darkText: {
    color: "rgba(255,255,255,0.72)",
    fontSize: 16,
    lineHeight: 23,
    fontWeight: "300",
    maxWidth: 720,
  },
  darkActions: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 16,
  },
  darkPrimaryBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  darkPrimaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
  darkGhostBtn: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  darkGhostText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "400",
  },
  ctaSection: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
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
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 14,
    gap: 6,
  },
  faqQ: {
    color: COLORS.heading,
    fontWeight: "300",
    fontSize: 22,
    letterSpacing: -0.22,
  },
  faqA: {
    color: COLORS.body,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "300",
  },
  footerWrap: {
    marginTop: 26,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  footer: {
    backgroundColor: COLORS.background,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    gap: 6,
  },
  footerBrand: {
    color: COLORS.heading,
    fontSize: 20,
    fontWeight: "300",
    letterSpacing: -0.22,
  },
  footerText: {
    color: COLORS.body,
    fontSize: 13,
    fontWeight: "300",
  },
});
