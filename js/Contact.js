function Contact() {
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState('');

  // 300 words counter limit logic
  const countWords = (str) => {
    const trimmed = str.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

  const wordCount = countWords(message);

  const handleMessageChange = (e) => {
    const text = e.target.value;
    const currentCount = countWords(text);
    if (currentCount <= 300 || text.length < message.length) {
      setMessage(text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you! Your message has been sent successfully.');
    setMessage('');
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
          <p className="mt-2 text-slate-600">Feel free to reach out directly or send a message below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details */}
          <div className="md:col-span-1 space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-200 self-start">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Name</span>
              <p className="mt-1 font-semibold text-slate-900">Muhammad Asad</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Phone No</span>
              <a href="tel:+923221869906" className="mt-1 font-semibold text-sky-600 hover:underline block">
                +92 322 1869906
              </a>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Email</span>
              <a href="mailto:muhammad%20asad0882@gmail.com" className="mt-1 font-semibold text-sky-600 hover:underline break-all block">
                muhammad asad0882@gmail.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-slate-50 p-6 sm:p-8 rounded-xl border border-slate-200">
            {status && (
              <div className="mb-4 p-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg">
                {status}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* 300 words option block */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <span className={`text-xs font-medium ${wordCount >= 300 ? 'text-red-500' : 'text-slate-500'}`}>
                    {wordCount} / 300 words
                  </span>
                </div>
                <textarea
                  required
                  rows="5"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Type your message here (up to 300 words)..."
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 resize-y"
                ></textarea>
              </div>

              {/* Submit option directly underneath */}
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-semibold rounded-lg text-white bg-sky-600 hover:bg-sky-700 active:scale-[0.99] transition shadow-sm"
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