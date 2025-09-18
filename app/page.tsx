import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Activity,
  Heart,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Activity className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ExerciseRx</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Sign In
              </Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Shield className="h-3 w-3 mr-1" />
                  Medically Validated
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Personalized Exercise Plans
                  <span className="text-primary"> Tailored to You</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  Revolutionary AI-powered system that creates safe, effective workout programs based on your unique
                  medical history and fitness goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/placeholder-117nv.png"
                  alt="ExerciseRx App Interface"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Heart className="h-3 w-3 mr-1" />
              Advanced Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Intelligent Exercise Prescription</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Our AI-powered system combines medical expertise with cutting-edge technology to deliver personalized,
              safe, and effective exercise programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Risk Stratification</h3>
                <p className="text-muted-foreground mb-6">
                  Advanced algorithms analyze your medical history to identify potential risks and create safe exercise
                  parameters tailored to your condition.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Medical history analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Risk factor identification
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Safety parameter setting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Dynamic Intensity Adjustment</h3>
                <p className="text-muted-foreground mb-6">
                  Real-time adaptation of workout intensity based on your performance, recovery, and physiological
                  responses for optimal results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Real-time adjustments
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Performance tracking
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Recovery optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Wearable Integration</h3>
                <p className="text-muted-foreground mb-6">
                  Seamless connection with popular fitness wearables for continuous monitoring and data-driven exercise
                  recommendations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Multi-device compatibility
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Continuous monitoring
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Data synchronization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Activity className="h-3 w-3 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">How ExerciseRx Works</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Get started with your personalized exercise program in just three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Medical Assessment</h3>
                <p className="text-muted-foreground">
                  Complete a comprehensive health questionnaire and upload your medical history for our AI to analyze
                  your unique health profile.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our advanced algorithms process your data to create a personalized exercise prescription that's safe
                  and effective for your condition.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Start Training</h3>
                <p className="text-muted-foreground">
                  Begin your personalized workout program with real-time monitoring, progress tracking, and continuous
                  adjustments based on your performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Users className="h-3 w-3 mr-1" />
              Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">Trusted by Healthcare Professionals</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              See how ExerciseRx is transforming patient care and improving health outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "ExerciseRx has revolutionized how I prescribe exercise to my cardiac patients. The risk
                  stratification is incredibly accurate and gives me confidence in patient safety."
                </p>
                <div className="flex items-center">
                  <img
                    src="/professional-doctor-headshot.png"
                    alt="Dr. Sarah Johnson"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold">Dr. Sarah Johnson</div>
                    <div className="text-sm text-muted-foreground">Cardiologist</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "The dynamic intensity adjustment feature is game-changing. My patients see better results while
                  staying within safe parameters. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <img src="/physical-therapist-professional-headshot.jpg" alt="Mike Chen" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <div className="font-semibold">Mike Chen, PT</div>
                    <div className="text-sm text-muted-foreground">Physical Therapist</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">
                  "As someone with diabetes, I was hesitant about exercise. ExerciseRx created a perfect program for my
                  condition. I feel stronger and more confident than ever."
                </p>
                <div className="flex items-center">
                  <img src="/happy-patient-testimonial-headshot.jpg" alt="Maria Rodriguez" className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <div className="font-semibold">Maria Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Patient</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground text-balance">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-primary-foreground/90 text-pretty max-w-3xl mx-auto">
              Join thousands of patients and healthcare professionals who trust ExerciseRx for safe, effective, and
              personalized exercise programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Activity className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">ExerciseRx</span>
              </div>
              <p className="text-muted-foreground">
                Revolutionizing healthcare through personalized exercise prescription technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    HIPAA Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ExerciseRx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
