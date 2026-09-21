function Contact() {
  const [message, setMessage] = React.useState('');
  const [successNotice, setSuccessNotice] = React.useState('');

  // 300 words limit calculator
  const countWords = (text) => {
    const trimmed = text.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

  const wordCount = countWords(message);

  const handleMessageChange = (e) => {
    const val = e.target.value;
    const words = countWords(val);
    if (words <= 300 || val.length < message.length) {
      setMessage(val);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessNotice('Thank you! Your inquiry has been sent to Muhammad Asad.');
    setMessage('');
    setTimeout(() => setSuccessNotice(''), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold uppercase text-[#222831] tracking-tight">
            Contact Us
          </h2>
          <div className="w-12 h-1 bg-[#00adb5] mx-auto mt-3 mb-4"></div>
          <p className="text-sm text-slate-500">
            Have a project in mind? Let's build something awesome together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information Details */}
          <div className="bg-[#f8fafc] p-8 rounded border border-slate-200 space-y-6 self-start">
            <h3 className="font-heading font-bold text-lg text-[#222831] pb-3 border-b border-slate-200">
              Contact Information
            </h3>

            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 block">Name:</span>
              <p className="mt-1 font-heading font-bold text-base text-[#222831]">Muhammad Asad</p>
            </div>

            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 block">Phone No:</span>
              <a href="tel:+923221869906" className="mt-1 font-semibold text-slate-800 hover:text-[#00adb5] transition-colors block">
                +92 322 1869906
              </a>
            </div>

            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-slate-400 block">Email:</span>
              <a href="mailto:muhammad%20asad0882@gmail.com" className="mt-1 font-semibold text-slate-800 hover:text-[#00adb5] transition-colors break-all block">
                muhammad asad0882@gmail.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-[#f8fafc] p-8 rounded border border-slate-200">
            {successNotice && (
              <div className="mb-6 p-4 rounded bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-medium">
                {successNotice}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Name *
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name" 
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-[#00adb5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Your Email *
                  </label>
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-[#00adb5]"
                  />
                </div>
              </div>

              {/* Message block of 300 words */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-heading font-bold uppercase tracking-wider text-slate-700">
                    Message (max 300 words) *
                  </label>
                  <span className={`text-xs font-heading font-bold ${wordCount >= 300 ? 'text-red-500' : 'text-slate-500'}`}>
                    {wordCount} / 300 words
                  </span>
                </div>
                <textarea
                  required
                  rows="6"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-[#00adb5] resize-y"
                ></textarea>
              </div>

              {/* Submit option under the message */}
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 bg-[#00adb5] text-white font-heading text-xs uppercase tracking-widest font-bold rounded hover:bg-[#008b92] transition-all shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}