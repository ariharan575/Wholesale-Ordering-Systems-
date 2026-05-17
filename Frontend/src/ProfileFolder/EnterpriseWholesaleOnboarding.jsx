import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Bell,
  Moon,
  Sun,
  Search,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Settings2,
  Menu,
  X,
  Zap,
  Globe2,
  User,
  Phone,
  Mail,
  MapPin,
  Store,
  Truck,
  CreditCard,
  Clock3,
  FileText,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import EnterpriseNavbar from "../Components/EnterpriseNavbar";

/*
====================================================
TAILWIND CONFIG
====================================================

tailwind.config.js

module.exports = {
  darkMode: "class",
}

====================================================
*/

const steps = [
  "Business Info",
  "Location",
  "Preferences",
  "Verification",
];

export default function EnterpriseOnboardingUI() {
  const [step, setStep] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    mobile: "",
    email: "",
    businessType: "",
    gst: "",

    address: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    deliveryRadius: "",

    categories: "",
    minimumOrder: "",
    paymentMethod: "",
    storeTiming: "",

    document: "",
    notification: "",
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const back = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const progress = ((step + 1) / steps.length) * 100;

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] dark:bg-[#050816] transition-all duration-500 relative overflow-hidden">
      <EnterpriseNavbar/>

      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute top-[-150px] left-[-120px] w-[420px] h-[420px] bg-pink-500/20 blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-sky-500/20 blur-3xl rounded-full"
      />

      {/* MOBILE HEADER */}
      <header className="lg:hidden sticky top-0 z-50 backdrop-blur-2xl bg-white/70 dark:bg-[#050816]/80 border-b border-slate-200 dark:border-white/10">

        <div className="px-4 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <motion.div
              whileHover={{ rotate: 8 }}
              className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center shadow-lg shadow-pink-500/30"
            >
              <Sparkles size={18} className="text-white" />
            </motion.div>

            <div>
              <h1 className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                StockLinker
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Enterprise Setup
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white transition-all duration-300"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white"
            >
              {mobileMenu ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* MOBILE PROGRESS */}
        <div className="px-4 pb-4">
          <div className="flex justify-between mb-2">

            <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
              Step {step + 1} / {steps.length}
            </p>

            <p className="text-sm font-bold text-pink-500">
              {Math.round(progress)}%
            </p>
          </div>

          <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
            <motion.div
              animate={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-pink-500 via-rose-500 to-sky-500 rounded-full"
            />
          </div>
        </div>

        <AnimatePresence>

          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="border-t border-slate-200 dark:border-white/10 p-4 bg-white dark:bg-[#0B1120]"
            >

              <div className="space-y-3">

                {steps.map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 p-3 rounded-2xl ${
                      index === step
                        ? "bg-gradient-to-r from-pink-500/10 to-sky-500/10 border border-pink-500/20"
                        : "bg-slate-50 dark:bg-white/[0.03]"
                    }`}
                  >

                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${
                        index <= step
                          ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                          : "bg-slate-200 dark:bg-white/10 text-slate-500"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {item}
                      </p>

                      <p className="text-xs text-slate-500">
                        Enterprise setup
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN */}
      <div className="relative z-10 lg:p-6">

        <div className="max-w-7xl mx-auto min-h-screen lg:min-h-[95vh] rounded-none lg:rounded-[34px] overflow-hidden border-0 lg:border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-2xl shadow-none lg:shadow-[0_10px_60px_rgba(0,0,0,0.08)] dark:lg:shadow-[0_10px_60px_rgba(0,0,0,0.45)]">

          <div className="grid lg:grid-cols-[320px_1fr]">

            {/* SIDEBAR */}
            <aside className="hidden lg:flex relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#020617] text-white p-8 flex-col justify-between">

              <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_top_left,_#ec4899,_transparent_30%)]" />

              <div className="relative z-10">

                <div className="flex items-center gap-4">

                  <motion.div
                    whileHover={{
                      rotate: 10,
                      scale: 1.05,
                    }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center shadow-xl shadow-pink-500/30"
                  >
                    <Sparkles size={24} />
                  </motion.div>

                  <div>
                    <h1 className="text-3xl font-black tracking-tight">
                      StockLinker
                    </h1>

                    <p className="text-slate-400 text-sm mt-1">
                      Enterprise Commerce
                    </p>
                  </div>
                </div>

                <div className="mt-16">

                  {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                    <ShieldCheck size={14} />
                    Secure Workspace
                  </div> */}

                  <h2 className="text-[42px] font-black leading-[1.1] mt-7 tracking-tight">
                    Setup your
                    <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-sky-400 bg-clip-text text-transparent">
                      business profile
                    </span>
                  </h2>

                  <p className="text-slate-400 mt-6 leading-relaxed text-[15px]">
                    Modern onboarding experience for wholesalers and shopkeepers.
                  </p>
                </div>

                {/* <div className="grid grid-cols-2 gap-4 mt-10">

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Zap className="text-pink-400" size={20} />

                    <p className="text-sm font-semibold mt-3">
                      Fast Setup
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      Complete onboarding quickly
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Globe2 className="text-sky-400" size={20} />

                    <p className="text-sm font-semibold mt-3">
                      Cloud Sync
                    </p>

                    <p className="text-xs text-slate-400 mt-1">
                      Access anywhere securely
                    </p>
                  </div>
                </div> */}

                <div className="mt-14 space-y-6">

                  {steps.map((item, index) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-4"
                    >

                      <motion.div
                        animate={{
                          scale: index === step ? 1.08 : 1,
                        }}
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all duration-500 ${
                          index <= step
                            ? "bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 text-white shadow-lg shadow-pink-500/30"
                            : "bg-white/5 border border-white/10 text-slate-400"
                        }`}
                      >
                        {index < step ? (
                          <CheckCircle2 size={18} />
                        ) : (
                          index + 1
                        )}
                      </motion.div>

                      <div>
                        <p
                          className={`font-semibold ${
                            index <= step
                              ? "text-white"
                              : "text-slate-400"
                          }`}
                        >
                          {item}
                        </p>

                        <p className="text-xs text-slate-500 mt-1">
                          Enterprise configuration
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative z-10">

                <div className="flex justify-between mb-3">

                  <p className="text-sm text-slate-400">
                    Completion
                  </p>

                  <p className="text-sm font-bold text-pink-400">
                    {Math.round(progress)}%
                  </p>
                </div>

                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-sky-500"
                  />
                </div>

                <p className="text-xs text-slate-500 mt-3">
                  Auto saved securely
                </p>
              </div>
            </aside>

            {/* RIGHT */}
            <div className="flex flex-col">

              {/* DESKTOP NAVBAR */}
              <header className="hidden lg:flex h-[88px] border-b border-slate-200 dark:border-white/10 bg-white/60 dark:bg-[#0B1120]/60 backdrop-blur-2xl px-10 items-center justify-between">

                <div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                    Business Onboarding
                  </h2>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Configure your workspace professionally
                  </p>
                </div>

                <div className="flex items-center gap-4">

                  <div className="flex items-center gap-3 px-4 h-12 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 min-w-[260px]">

                    <Search
                      size={18}
                      className="text-slate-400"
                    />

                    <input
                      placeholder="Search..."
                      className="bg-transparent outline-none text-sm flex-1 text-slate-700 dark:text-white placeholder:text-slate-400"
                    />
                  </div>

                  <button className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white">
                    <Bell size={18} />
                  </button>

                  <button className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-white">
                    <Settings2 size={18} />
                  </button>

                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center text-white shadow-lg shadow-pink-500/30"
                  >
                    {darkMode ? (
                      <Sun size={18} />
                    ) : (
                      <Moon size={18} />
                    )}
                  </button>
                </div>
              </header>

              {/* CONTENT */}
              <main className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto">

                {/* TABLET STEPPER */}
                <div className="hidden md:flex lg:hidden gap-3 overflow-x-auto pb-2 mb-8">

                  {steps.map((item, index) => (
                    <div
                      key={item}
                      className={`min-w-fit flex items-center gap-3 px-4 py-3 rounded-2xl border ${
                        index === step
                          ? "bg-gradient-to-r from-pink-500/10 to-sky-500/10 border-pink-500/20"
                          : "bg-white dark:bg-white/[0.03] border-slate-200 dark:border-white/10"
                      }`}
                    >

                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold ${
                          index <= step
                            ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                            : "bg-slate-200 dark:bg-white/10 text-slate-500"
                        }`}
                      >
                        {index + 1}
                      </div>

                      <p className="font-semibold text-slate-700 dark:text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* FORM CONTAINER */}
                <motion.div
                  layout
                  className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[28px] p-5 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                >

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                    >

                      {/* STEP 1 */}
                      {step === 0 && (
                        <div>

                          <SectionTitle
                            title="Business Information"
                            subtitle="Add your company and owner details"
                          />

                          <div className="grid md:grid-cols-2 gap-5 mt-8">

                            <Input
                              icon={Building2}
                              label="Business Name"
                              placeholder="ABC Traders"
                              value={formData.businessName}
                              onChange={(e) =>
                                updateField("businessName", e.target.value)
                              }
                            />

                            <Input
                              icon={User}
                              label="Owner Name"
                              placeholder="John Kumar"
                              value={formData.ownerName}
                              onChange={(e) =>
                                updateField("ownerName", e.target.value)
                              }
                            />

                            <Input
                              icon={Phone}
                              label="Mobile Number"
                              placeholder="+91 9876543210"
                              value={formData.mobile}
                              onChange={(e) =>
                                updateField("mobile", e.target.value)
                              }
                            />

                            <Input
                              icon={Mail}
                              label="Business Email"
                              placeholder="business@email.com"
                              value={formData.email}
                              onChange={(e) =>
                                updateField("email", e.target.value)
                              }
                            />

                            <Input
                              icon={Store}
                              label="Business Type"
                              placeholder="FMCG / Grocery"
                              value={formData.businessType}
                              onChange={(e) =>
                                updateField("businessType", e.target.value)
                              }
                            />

                            <Input
                              icon={FileText}
                              label="GST Number"
                              placeholder="Optional"
                              value={formData.gst}
                              onChange={(e) =>
                                updateField("gst", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      )}

                      {/* STEP 2 */}
                      {step === 1 && (
                        <div>

                          <SectionTitle
                            title="Location & Delivery Area"
                            subtitle="Set your business location details"
                          />

                          <div className="grid md:grid-cols-2 gap-5 mt-8">

                            <Input
                              icon={MapPin}
                              label="Address"
                              placeholder="Street Address"
                              value={formData.address}
                              onChange={(e) =>
                                updateField("address", e.target.value)
                              }
                            />

                            <Input
                              icon={MapPin}
                              label="City"
                              placeholder="Erode"
                              value={formData.city}
                              onChange={(e) =>
                                updateField("city", e.target.value)
                              }
                            />

                            <Input
                              icon={MapPin}
                              label="State"
                              placeholder="Tamil Nadu"
                              value={formData.state}
                              onChange={(e) =>
                                updateField("state", e.target.value)
                              }
                            />

                            <Input
                              icon={MapPin}
                              label="Pincode"
                              placeholder="638001"
                              value={formData.pincode}
                              onChange={(e) =>
                                updateField("pincode", e.target.value)
                              }
                            />

                            <Input
                              icon={Truck}
                              label="Delivery Radius"
                              placeholder="10 KM"
                              value={formData.deliveryRadius}
                              onChange={(e) =>
                                updateField("deliveryRadius", e.target.value)
                              }
                            />

                            <Input
                              icon={MapPin}
                              label="Landmark"
                              placeholder="Near Market"
                              value={formData.landmark}
                              onChange={(e) =>
                                updateField("landmark", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      )}

                      {/* STEP 3 */}
                      {step === 2 && (
                        <div>

                          <SectionTitle
                            title="Business Preferences"
                            subtitle="Customize your platform experience"
                          />

                          <div className="grid md:grid-cols-2 gap-5 mt-8">

                            <Input
                              icon={Store}
                              label="Product Categories"
                              placeholder="Rice, Oil, FMCG"
                              value={formData.categories}
                              onChange={(e) =>
                                updateField("categories", e.target.value)
                              }
                            />

                            <Input
                              icon={Truck}
                              label="Minimum Order"
                              placeholder="20 KG"
                              value={formData.minimumOrder}
                              onChange={(e) =>
                                updateField("minimumOrder", e.target.value)
                              }
                            />

                            <Input
                              icon={CreditCard}
                              label="Payment Method"
                              placeholder="UPI / COD"
                              value={formData.paymentMethod}
                              onChange={(e) =>
                                updateField("paymentMethod", e.target.value)
                              }
                            />

                            <Input
                              icon={Clock3}
                              label="Store Timing"
                              placeholder="9 AM - 8 PM"
                              value={formData.storeTiming}
                              onChange={(e) =>
                                updateField("storeTiming", e.target.value)
                              }
                            />
                          </div>
                        </div>
                      )}

                      {/* STEP 4 */}
                      {step === 3 && (
                        <div>

                          <SectionTitle
                            title="Verification & Finish"
                            subtitle="Complete the final setup process"
                          />

                          <div className="grid md:grid-cols-2 gap-5 mt-8">

                            <Input
                              icon={ShieldCheck}
                              label="Business Verification"
                              placeholder="Upload document"
                              value={formData.document}
                              onChange={(e) =>
                                updateField("document", e.target.value)
                              }
                            />

                            <Input
                              icon={Bell}
                              label="Notification Preference"
                              placeholder="SMS / WhatsApp"
                              value={formData.notification}
                              onChange={(e) =>
                                updateField("notification", e.target.value)
                              }
                            />
                          </div>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6"
                          >

                            <div className="flex items-start gap-4">

                              <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                                <CheckCircle2 size={26} />
                              </div>

                              <div>
                                <h3 className="text-xl font-bold text-emerald-600">
                                  Setup Almost Complete
                                </h3>

                                <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                                  Your business profile is ready.
                                  Review all information and launch your dashboard.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </main>

              {/* FOOTER */}
              <div className="sticky bottom-0 lg:static border-t border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#050816]/80 backdrop-blur-2xl p-4 sm:p-6 lg:px-10 flex items-center justify-between">

                <button
                  onClick={back}
                  disabled={step === 0}
                  className="px-5 sm:px-6 py-3 rounded-2xl border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 disabled:opacity-40 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <ArrowLeft size={18} />

                  <span className="hidden sm:block">
                    Back
                  </span>
                </button>

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={next}
                  className="group px-6 sm:px-8 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-sky-500 text-white font-bold shadow-[0_10px_30px_rgba(236,72,153,0.35)] flex items-center gap-2"
                >
                  {step === steps.length - 1
                    ? "Launch Dashboard"
                    : "Save & Continue"}

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================
SECTION TITLE
========================================= */

function SectionTitle({ title, subtitle }) {
  return (
    <div>

      <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>

      <p className="text-slate-500 dark:text-slate-400 mt-3 text-[15px] leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

/* =========================================
INPUT COMPONENT
========================================= */

function Input({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="group"
    >

      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 block">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-4 top-1/2 -translate-y-1/2">

          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500/10 to-sky-500/10 flex items-center justify-center border border-pink-500/10">

            <Icon
              size={18}
              className="text-pink-500"
            />
          </div>
        </div>

        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            h-[64px]
            pl-16
            pr-5
            rounded-2xl
            border
            border-slate-200
            dark:border-white/10
            bg-slate-50
            dark:bg-white/[0.03]
            text-slate-900
            dark:text-white
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-300
            focus:border-pink-500
            focus:ring-4
            focus:ring-pink-500/10
            hover:border-pink-400/40
          "
        />

        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-pink-500/[0.03] to-sky-500/[0.03]" />
      </div>
    </motion.div>
  );
}