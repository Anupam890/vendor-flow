import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  DollarSign,
  Users,
  Clock,
  Search,
  ShoppingCart,
  Linkedin,
  Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import StreetImage from "@/assets/images/StreetImage.png";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SE</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  StreetEzy
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#features"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Login
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Register
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-orange-50 text-orange-700 border-orange-200"
                >
                  Smart Sourcing for Street Food Vendors
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Empowering Street Vendors with Easy Raw Material Sourcing
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Find trusted suppliers, compare prices, and order hassle-free.
                  Transform your street food business with smart sourcing
                  solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-transparent"
                >
                  For Suppliers
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src={StreetImage}
                alt="StreetEzy app"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Everything You Need to Source Smart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline your supply chain with our comprehensive platform
              designed specifically for street food vendors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-200 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">
                  Find Nearby Verified Suppliers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Discover trusted suppliers in your area with verified
                  credentials and quality ratings.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">
                  Compare Prices Instantly
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Get real-time price comparisons from multiple suppliers to
                  make informed decisions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">
                  Place Group Orders to Save Money
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Join with other vendors to place bulk orders and unlock better
                  pricing deals.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-200 border-0 shadow-md">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">
                  Track Orders in Real-time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Monitor your orders from placement to delivery with live
                  tracking updates.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              How StreetEzy Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps and transform your sourcing
              process today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Vendor Registers
                </h3>
                <p className="text-gray-600">
                  Sign up and create your vendor profile with your business
                  details and sourcing needs.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Find Suppliers
                </h3>
                <p className="text-gray-600">
                  Browse verified suppliers in your area, compare prices, and
                  read reviews from other vendors.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingCart className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Place Orders
                </h3>
                <p className="text-gray-600">
                  Place individual or group orders, track delivery, and manage
                  your supply chain efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Start Saving on Raw Materials Today!
            </h2>
            <p className="text-xl text-orange-100">
              Join thousands of street food vendors who are already saving money
              and time with StreetEzy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 text-lg transition-all duration-200 hover:scale-105"
              >
                Sign Up Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 text-lg transition-all duration-200 hover:scale-105 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SE</span>
                </div>
                <span className="text-xl font-bold">StreetEzy</span>
              </div>
              <p className="text-gray-400">
                Smart sourcing solutions for street food vendors across the
                country.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} StreetEzy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
