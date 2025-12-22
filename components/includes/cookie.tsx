"use client";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showManageModal, setShowManageModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("acceptCookies") === "true";
    setHasAcceptedCookies(accepted);
    if (!accepted) {
      setIsVisible(true);
    } else {
      const savedPreferences = JSON.parse(
        localStorage.getItem("cookiePreferences") || "{}",
      );
      setPreferences((prev) => ({ ...prev, ...savedPreferences }));
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("acceptCookies", "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setIsVisible(false);
    setHasAcceptedCookies(true);
  };

  const handleManageCookies = () => {
    setShowManageModal(true);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowManageModal(false);
      setIsClosing(false);
    }, 300); 
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    handleCloseModal();
  };

  const handlePreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-4 right-4 flex w-full max-w-xs flex-col items-start space-y-3 rounded-lg border border-gray-300 bg-white p-4 shadow-lg transition-all duration-500 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faPalette}
              className="rounded-md border bg-violet-300 p-2 text-violet-800"
            />
            <span className="text-lg font-bold text-primary">
              Cookie Notice
            </span>
          </div>
          <p className="text text-sm font-semibold text-primary opacity-80">
            We use cookies to improve your experience on our site. By
            continuing, you accept our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-primary underline"
            >
              Privacy Policy.
            </Link>
          </p>
          <div className="flex w-full space-x-2">
            <div
              onClick={handleManageCookies}
              className="w-full cursor-pointer rounded bg-gray-300 py-1.5 text-center text-sm font-semibold text-primary hover:bg-gray-400 focus:outline-none"
            >
              Manage Cookies
            </div>
            <div
              onClick={handleAccept}
              className="w-full cursor-pointer rounded bg-violet-800 py-1.5 text-center text-sm font-semibold text-white hover:bg-violet-600 focus:outline-none"
            >
              Accept
            </div>
          </div>
        </div>
      )}

      <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-out ${
          showManageModal && !isClosing
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div
          className={`w-96 transform rounded-lg bg-white p-6 shadow-lg transition-all duration-500 ease-out ${
            showManageModal && !isClosing
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-2">
            <FontAwesomeIcon
              icon={faPalette}
              className="rounded-md border bg-violet-300 p-2 text-violet-800"
            />
            <span className="text-lg font-bold text-primary">
              Manage Cookies
            </span>
          </div>
          <p className="mb-4 text-sm text-gray-700">
            Choose which cookies you want to allow. You can change these
            settings at any time.
          </p>
          <div className="flex flex-col space-y-2 text-primary">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                name="necessary"
                checked={preferences.necessary}
                onChange={handlePreferenceChange}
                disabled
              />
              <span className="ml-2 text-sm">
                Necessary Cookies (Always Active)
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                name="analytics"
                checked={preferences.analytics}
                onChange={handlePreferenceChange}
              />
              <span className="ml-2 text-sm">Analytics Cookies</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                name="marketing"
                checked={preferences.marketing}
                onChange={handlePreferenceChange}
              />
              <span className="ml-2 text-sm">Marketing Cookies</span>
            </label>
          </div>
          <div className="mt-4 flex justify-end">
            <div
              onClick={handleSavePreferences}
              className="cursor-pointer rounded bg-violet-500 px-4 py-2 text-white hover:bg-violet-600 focus:outline-none"
            >
              Save Preferences
            </div>
          </div>
        </div>
      </div>

      {hasAcceptedCookies && (
        <FontAwesomeIcon
          id="manage-cookies"
          icon={faPalette}
          className="fixed bottom-4 right-4 rounded bg-violet-800 p-2 text-white hover:cursor-pointer hover:bg-violet-700"
          onClick={handleManageCookies}
        />
      )}
    </>
  );
};

export default CookieBanner;
