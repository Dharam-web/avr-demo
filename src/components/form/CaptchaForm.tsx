import { useEffect } from "react";

interface formProps {
  isOpen?: boolean;
  onSuccess?: () => void;
  onClose?: () => void;
  setCaptcha: (value: string) => void;
  captcha: string;
  captchaInput: string;
  setCaptchaInput: (value: string) => void;
  error: string;
}

const CustomCaptchaForm = ({
  isOpen,
  captcha,
  setCaptcha,
  captchaInput,
  setCaptchaInput,
  error,
}: formProps) => {
  // Generate Random CAPTCHA Code
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // removed confusing chars
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }

    setCaptcha(code);
    setCaptchaInput("");
  };

  // Generate on first load
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    isOpen && (
      <div className="flex justify-center items-center">
        <form className="space-y-4 w-full mx-auto p-4 border rounded bg-white">
          {/* CAPTCHA SECTION */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-sm text-clr1">
              Enter the verification code below
            </label>

            {/* CAPTCHA BOX */}
            <div className="flex items-center gap-2">
              <div
                className="px-4 py-2 bg-gray-200 font-bold tracking-widest text-lg select-none rounded relative overflow-hidden"
                style={{
                  letterSpacing: "4px",
                  fontFamily: "monospace",
                  textShadow: "1px 1px 0px #0002",
                }}
              >
                {captcha}
                {/* Noise Lines */}
                <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                  <svg width="100%" height="100%">
                    <line
                      x1="0"
                      y1="20"
                      x2="200"
                      y2="0"
                      stroke="rgba(0,0,0,0.2)"
                      strokeWidth="2"
                    />
                    <line
                      x1="0"
                      y1="5"
                      x2="200"
                      y2="30"
                      stroke="rgba(0,0,0,0.2)"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>

              {/* Refresh Button */}
              {/* <button
                type="button"
                onClick={generateCaptcha}
                className="text-sm text-blue-600 underline"
              >
                Refresh
              </button> */}
            </div>

            {/* CAPTCHA Input */}
            <input
              type="text"
              value={captchaInput}
              placeholder="Enter the code"
              onChange={(e) => setCaptchaInput(e.target.value.toUpperCase())}
              className="border p-2 rounded outline-none uppercase placeholder:capitalize"
              required
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </form>
      </div>
    )
  );
};

export default CustomCaptchaForm;
