import React, { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Building2,
  Check,
  CheckCircle2,
  Globe2,
  Mail,
  MapPinned,
  Moon,
  Phone,
  ShieldCheck,
  Smartphone,
  Store,
  Sun,
  Truck,
  User2,
} from "lucide-react";

const WHOLESALER_CATEGORIES = [
  "Beverages",
  "Groceries",
  "FMCG",
  "Vegetables",
  "Pharmacy",
  "Electronics",
];

const SHOPKEEPER_CATEGORIES = [
  "Groceries",
  "Beverages",
  "Snacks",
  "Cleaning Items",
  "Daily Essentials",
  "Stationery",
];

const DELIVERY_OPTIONS = [
  "Self Delivery",
  "Pickup",
  "Local Supply Only",
];

const STORE_TYPES = [
  "Small Shop",
  "Mini Market",
  "Supermarket",
  "Wholesale Retail",
];

const NOTIFICATION_OPTIONS = [
  {
    icon: Smartphone,
    title: "WhatsApp Alerts",
  },
  {
    icon: Mail,
    title: "Email Notifications",
  },
  {
    icon: Bell,
    title: "In-App Updates",
  },
];

const STEPS = [
  "Business Identity",
  "Business Address",
  "Marketplace Setup",
  "Preferences",
];

export default function StockLinkerEnterpriseOnboarding() {
  const [darkMode, setDarkMode] = useState(true);
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("WHOLESALER");
  const [completed, setCompleted] = useState(false);

  const [formData, setFormData] = useState({
    ownerName: "",
    businessName: "",
    businessType: "",
    businessCategory: [],
    mobile: "",
    alternateMobile: "",
    email: "",
    gstNumber: "",

    addressLine1: "",
    addressLine2: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    landmark: "",

    deliveryMethod: "",
    storeType: "",

    notifications: "WhatsApp Alerts",
    smartRecommendations: true,
  });

  const progress = useMemo(() => {
    return ((step + 1) / STEPS.length) * 100;
  }, [step]);

  const updateField = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleCategory = (category) => {
    const exists = formData.businessCategory.includes(category);

    if (exists) {
      updateField(
        "businessCategory",
        formData.businessCategory.filter((item) => item !== category)
      );
    } else {
      updateField("businessCategory", [
        ...formData.businessCategory,
        category,
      ]);
    }
  };

  const nextStep = () => {
    if (step < STEPS.length - 1) {
      setStep((prev) => prev + 1);
    } else {
      setCompleted(true);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const categories =
    role === "WHOLESALER"
      ? WHOLESALER_CATEGORIES
      : SHOPKEEPER_CATEGORIES;

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode
          ? "bg-[#050816] text-white"
          : "bg-[#f5f7fb] text-slate-900"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[320px] h-[320px] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute top-[20%] right-[15%] w-[180px] h-[180px] rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <header
        className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
          darkMode
            ? "bg-black/30 border-white/10"
            : "bg-white/70 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-sky-500 flex items-center justify-center shadow-2xl shadow-pink-500/30">
              <Building2 className="w-6 h-6 text-white" />
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight">
                StockLinker
              </h1>
              <p
                className={`text-xs sm:text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Enterprise Marketplace Platform
              </p>
            </div>
          </motion.div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setRole("WHOLESALER")}
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all duration-300 ${
                role === "WHOLESALER"
                  ? "bg-gradient-to-r from-pink-500 to-red-500 text-white border-transparent shadow-xl shadow-pink-500/20"
                  : darkMode
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-slate-200 bg-white hover:bg-slate-100"
              }`}
            >
              <Truck className="w-4 h-4" />
              Wholesaler
            </button>

            <button
              onClick={() => setRole("SHOPKEEPER")}
              className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl border transition-all duration-300 ${
                role === "SHOPKEEPER"
                  ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-transparent shadow-xl shadow-sky-500/20"
                  : darkMode
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-slate-200 bg-white hover:bg-slate-100"
              }`}
            >
              <Store className="w-4 h-4" />
              Shopkeeper
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                darkMode
                  ? "bg-white/10 border-white/10 hover:bg-white/20"
                  : "bg-white border-slate-200 hover:bg-slate-100"
              }`}
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid xl:grid-cols-[320px_1fr] gap-6 lg:gap-8">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className={`rounded-[32px] overflow-hidden border backdrop-blur-xl h-fit sticky top-28 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
            }`}
          >
            <div className="p-6 sm:p-8 bg-gradient-to-br from-pink-500 via-red-500 to-sky-500 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-3xl" />

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="relative z-10"
              >
                <div className="w-16 h-16 rounded-3xl bg-white/15 backdrop-blur-xl flex items-center justify-center border border-white/20 mb-5">
                  <ShieldCheck className="w-8 h-8" />
                </div>

                <h2 className="text-2xl font-black leading-tight">
                  Setup Your Marketplace Business
                </h2>

                <p className="mt-3 text-white/80 text-sm leading-relaxed">
                  Create your enterprise business profile and start connecting
                  with suppliers and retailers.
                </p>
              </motion.div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="space-y-5">
                {STEPS.map((item, index) => {
                  const active = step === index;
                  const finished = index < step;

                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center gap-4"
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all duration-300 ${
                          finished
                            ? "bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg shadow-pink-500/30"
                            : active
                            ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/30"
                            : darkMode
                            ? "bg-white/5 border border-white/10 text-slate-400"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {finished ? <Check size={18} /> : index + 1}
                      </div>

                      <div>
                        <h3 className="font-semibold">{item}</h3>
                        <p
                          className={`text-sm ${
                            darkMode ? "text-slate-400" : "text-slate-500"
                          }`}
                        >
                          Step {index + 1}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-10">
                <div className="flex justify-between text-sm mb-3">
                  <span
                    className={darkMode ? "text-slate-300" : "text-slate-600"}
                  >
                    Completion
                  </span>
                  <span className="font-semibold">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div
                  className={`h-3 rounded-full overflow-hidden ${
                    darkMode ? "bg-white/10" : "bg-slate-200"
                  }`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-pink-500 via-red-500 to-sky-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-[32px] border backdrop-blur-xl overflow-hidden ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
            }`}
          >
            <div className="p-5 sm:p-8 lg:p-10 min-h-[780px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {!completed ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step === 0 && (
                      <BusinessIdentityStep
                        darkMode={darkMode}
                        formData={formData}
                        updateField={updateField}
                      />
                    )}

                    {step === 1 && (
                      <AddressStep
                        darkMode={darkMode}
                        formData={formData}
                        updateField={updateField}
                      />
                    )}

                    {step === 2 && (
                      <MarketplaceStep
                        darkMode={darkMode}
                        role={role}
                        categories={categories}
                        formData={formData}
                        toggleCategory={toggleCategory}
                        updateField={updateField}
                      />
                    )}

                    {step === 3 && (
                      <PreferenceStep
                        darkMode={darkMode}
                        formData={formData}
                        updateField={updateField}
                      />
                    )}
                  </motion.div>
                ) : (
                  <SuccessScreen
                    darkMode={darkMode}
                    formData={formData}
                  />
                )}
              </AnimatePresence>

              {!completed && (
                <div
                  className={`mt-10 pt-6 border-t flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between ${
                    darkMode ? "border-white/10" : "border-slate-200"
                  }`}
                >
                  <button
                    onClick={prevStep}
                    disabled={step === 0}
                    className={`h-14 px-6 rounded-2xl flex items-center justify-center gap-2 font-semibold transition-all duration-300 ${
                      step === 0
                        ? "opacity-40 cursor-not-allowed"
                        : darkMode
                        ? "bg-white/10 hover:bg-white/15 border border-white/10"
                        : "bg-slate-100 hover:bg-slate-200"
                    }`}
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={nextStep}
                    className="h-14 px-8 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-sky-500 text-white font-bold flex items-center justify-center gap-2 shadow-2xl shadow-pink-500/20"
                  >
                    {step === STEPS.length - 1
                      ? "Complete Setup"
                      : "Save & Continue"}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              )}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}

function SectionTitle({ darkMode, title, subtitle }) {
  return (
    <div className="mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-black tracking-tight"
      >
        {title}
      </motion.h2>

      <p
        className={`mt-3 text-base sm:text-lg ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}

function InputField({ darkMode, label, icon: Icon, placeholder }) {
  return (
    <motion.div whileHover={{ y: -2 }}>
      <label
        className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
          darkMode ? "text-slate-200" : "text-slate-700"
        }`}
      >
        <Icon className="w-4 h-4" />
        {label}
      </label>

      <input
        placeholder={placeholder}
        className={`w-full h-14 rounded-2xl px-5 outline-none transition-all duration-300 border ${
          darkMode
            ? "bg-white/5 border-white/10 focus:border-pink-500 text-white placeholder:text-slate-500"
            : "bg-white border-slate-200 focus:border-pink-500 placeholder:text-slate-400"
        }`}
      />
    </motion.div>
  );
}

function BusinessIdentityStep({ darkMode }) {
  return (
    <div>
      <SectionTitle
        darkMode={darkMode}
        title="Tell us about your business"
        subtitle="This helps create your enterprise marketplace profile."
      />

      <div className="grid md:grid-cols-2 gap-5">
        <InputField
          darkMode={darkMode}
          label="Owner Name"
          icon={User2}
          placeholder="Kumar"
        />

        <InputField
          darkMode={darkMode}
          label="Business Name"
          icon={Building2}
          placeholder="Kumar Traders"
        />

        <InputField
          darkMode={darkMode}
          label="Business Type"
          icon={Store}
          placeholder="Wholesale Grocery"
        />

        <InputField
          darkMode={darkMode}
          label="Mobile Number"
          icon={Phone}
          placeholder="+91 9876543210"
        />

        <InputField
          darkMode={darkMode}
          label="Business Email"
          icon={Mail}
          placeholder="business@email.com"
        />

        <InputField
          darkMode={darkMode}
          label="GST Number"
          icon={ShieldCheck}
          placeholder="GST Number"
        />
      </div>
    </div>
  );
}

function AddressStep({ darkMode }) {
  return (
    <div>
      <SectionTitle
        darkMode={darkMode}
        title="Where is your business located?"
        subtitle="This helps connect nearby suppliers and retailers."
      />

      <div className="grid md:grid-cols-2 gap-5">
        <InputField
          darkMode={darkMode}
          label="Address Line 1"
          icon={MapPinned}
          placeholder="Street Address"
        />

        <InputField
          darkMode={darkMode}
          label="Address Line 2"
          icon={MapPinned}
          placeholder="Area / Locality"
        />

        <InputField
          darkMode={darkMode}
          label="City"
          icon={Building2}
          placeholder="Karur"
        />

        <InputField
          darkMode={darkMode}
          label="District"
          icon={Building2}
          placeholder="Karur"
        />

        <InputField
          darkMode={darkMode}
          label="State"
          icon={Globe2}
          placeholder="Tamil Nadu"
        />

        <InputField
          darkMode={darkMode}
          label="Pincode"
          icon={MapPinned}
          placeholder="639001"
        />
      </div>
    </div>
  );
}

function MarketplaceStep({
  darkMode,
  role,
  categories,
  formData,
  toggleCategory,
  updateField,
}) {
  return (
    <div>
      <SectionTitle
        darkMode={darkMode}
        title={
          role === "WHOLESALER"
            ? "Tell us about your business network"
            : "Help us customize your buying experience"
        }
        subtitle={
          role === "WHOLESALER"
            ? "We'll personalize your marketplace experience."
            : "We'll connect you with the right suppliers faster."
        }
      />

      <div>
        <h3 className="text-xl font-bold mb-5">
          {role === "WHOLESALER"
            ? "What products does your business supply?"
            : "What products does your shop need regularly?"}
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((item) => {
            const active = formData.businessCategory.includes(item);

            return (
              <motion.button
                key={item}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleCategory(item)}
                className={`h-24 rounded-3xl border transition-all duration-300 font-semibold ${
                  active
                    ? "bg-gradient-to-r from-pink-500 via-red-500 to-sky-500 text-white border-transparent shadow-2xl shadow-pink-500/20"
                    : darkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white border-slate-200 hover:border-pink-400"
                }`}
              >
                {item}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-5">
          {role === "WHOLESALER"
            ? "How do customers receive orders?"
            : "Select your store type"}
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {(role === "WHOLESALER"
            ? DELIVERY_OPTIONS
            : STORE_TYPES
          ).map((item) => {
            const active =
              role === "WHOLESALER"
                ? formData.deliveryMethod === item
                : formData.storeType === item;

            return (
              <motion.button
                key={item}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  role === "WHOLESALER"
                    ? updateField("deliveryMethod", item)
                    : updateField("storeType", item)
                }
                className={`h-24 rounded-3xl border font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white border-transparent shadow-2xl shadow-sky-500/20"
                    : darkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white border-slate-200 hover:border-sky-400"
                }`}
              >
                {item}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PreferenceStep({ darkMode, formData, updateField }) {
  return (
    <div>
      <SectionTitle
        darkMode={darkMode}
        title="Customize your StockLinker experience"
        subtitle="Choose how you'd like to use the platform."
      />

      <div>
        <h3 className="text-xl font-bold mb-5">
          How would you like to receive updates?
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          {NOTIFICATION_OPTIONS.map((item) => {
            const Icon = item.icon;
            const active = formData.notifications === item.title;

            return (
              <motion.button
                key={item.title}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => updateField("notifications", item.title)}
                className={`rounded-3xl p-6 text-left border transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-pink-500 via-red-500 to-sky-500 text-white border-transparent shadow-2xl shadow-pink-500/20"
                    : darkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white border-slate-200 hover:border-pink-400"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7" />
                </div>

                <h4 className="font-bold text-lg">{item.title}</h4>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div
        className={`mt-10 rounded-[28px] border p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ${
          darkMode
            ? "bg-white/5 border-white/10"
            : "bg-slate-50 border-slate-200"
        }`}
      >
        <div>
          <h3 className="text-2xl font-black">
            Enable smart recommendations?
          </h3>

          <p
            className={`mt-2 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Get personalized supplier and product suggestions.
          </p>
        </div>

        <button
          onClick={() =>
            updateField(
              "smartRecommendations",
              !formData.smartRecommendations
            )
          }
          className={`w-24 h-14 rounded-full relative transition-all duration-300 ${
            formData.smartRecommendations
              ? "bg-gradient-to-r from-pink-500 to-sky-500"
              : darkMode
              ? "bg-white/10"
              : "bg-slate-300"
          }`}
        >
          <motion.div
            animate={{
              x: formData.smartRecommendations ? 42 : 4,
            }}
            className="absolute top-2 w-10 h-10 rounded-full bg-white"
          />
        </button>
      </div>
    </div>
  );
}

function SuccessScreen({ darkMode }) {
  return (
    <div className="min-h-[650px] flex flex-col items-center justify-center text-center relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-pink-500/20 to-sky-500/20 blur-3xl"
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 140 }}
        className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-sky-500 flex items-center justify-center shadow-[0_0_80px_rgba(236,72,153,0.4)]"
      >
        <CheckCircle2 className="w-16 h-16 text-white" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10 text-4xl sm:text-5xl font-black tracking-tight"
      >
        Your marketplace is ready 🚀
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`mt-5 max-w-2xl text-lg leading-relaxed ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        Start exploring suppliers, products, and new business opportunities.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="mt-10 h-16 px-10 rounded-3xl bg-gradient-to-r from-pink-500 via-red-500 to-sky-500 text-white font-black text-lg shadow-2xl shadow-pink-500/30"
      >
        Go To Dashboard →
      </motion.button>
    </div>
  );
}
