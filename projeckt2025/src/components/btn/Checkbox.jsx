import React, { useState } from "react";

export default function ConsentForm() {
  const [acceptAll, setAcceptAll] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [newsletterAccepted, setNewsletterAccepted] = useState(false);

  const handleAcceptAll = (e) => {
    const checked = e.target.checked;
    setAcceptAll(checked);
    setTermsAccepted(checked);
    setNewsletterAccepted(checked);
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 font-medium w-max">
        <input
          type="checkbox"
          className="accent-black "
          checked={acceptAll}
          onChange={handleAcceptAll}
        />
        Accept everything
      </label>

      <label className="flex items-center gap-2 ml-4 w-max">
        <input
          type="checkbox"
          className="accent-black"
          checked={termsAccepted}
          required
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        I agree to the Terms and Privacy Policy. *
      </label>

      <label className="flex items-center gap-2 ml-4 w-max">
        <input
          type="checkbox"
          className="accent-black"
          checked={newsletterAccepted}
          onChange={(e) => setNewsletterAccepted(e.target.checked)}
        />
        Sign me up for exclusive deals, new drops, and picks just for me.
      </label>
    </div>
  );
}
