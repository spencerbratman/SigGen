import Head from 'next/head';
import SignatureGenerator from '../components/SignatureGenerator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Free Online Signature Generator | Create Your Digital Signature</title>
        <meta name="description" content="Create your personalized digital signature with our free online signature generator. Draw or type your signature and download it instantly." />
        <meta name="keywords" content="signature generator, digital signature, online signature, free signature maker" />
        <link rel="canonical" href="https://your-domain.com" />
        <meta property="og:title" content="Free Online Signature Generator | Create Your Digital Signature" />
        <meta property="og:description" content="Create your personalized digital signature with our free online signature generator. Draw or type your signature and download it instantly." />
        <meta property="og:url" content="https://your-domain.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Online Signature Generator | Create Your Digital Signature" />
        <meta name="twitter:description" content="Create your personalized digital signature with our free online signature generator. Draw or type your signature and download it instantly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Free Online Signature Generator</h1>
        <SignatureGenerator />
        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Create Your Digital Signature Easily</h2>
          <p className="mb-4">Our free online signature generator allows you to create personalized digital signatures quickly and easily. Whether you need a signature for documents, emails, or any digital purpose, our tool has got you covered.</p>
          
          <h3 className="text-xl font-semibold mb-2">Why Use Our Signature Generator?</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Easy to use: Draw or type your signature with just a few clicks</li>
            <li>Multiple styles: Choose from various handwriting-style fonts for typed signatures</li>
            <li>Instant download: Get your signature as a PNG file immediately</li>
            <li>Free and secure: No registration required, and we don't store your signatures</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">How to Use Our Signature Generator</h3>
          <ol className="list-decimal list-inside mb-4">
            <li>Choose between drawing or typing your signature</li>
            <li>If drawing, use your mouse or touchpad to create your signature</li>
            <li>If typing, enter your name and select your preferred font style</li>
            <li>Download your signature with a single click</li>
          </ol>

          <h3 className="text-xl font-semibold mb-2">Applications for Your Digital Signature</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Sign digital documents and contracts</li>
            <li>Add a professional touch to your emails</li>
            <li>Create a unique signature for your artwork or designs</li>
            <li>Personalize your digital communications</li>
          </ul>

          <p className="mt-4">Start creating your unique digital signature today with our free, easy-to-use signature generator!</p>
        </section>
      </main>

      <footer className="bg-gray-200 py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Signature Generator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
