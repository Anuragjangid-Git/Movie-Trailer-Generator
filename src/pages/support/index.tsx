import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { FAQSection } from './faq-section';
import { ContactForm } from './contact-form';

export function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Support</h1>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Need immediate help?</h2>
        <p className="text-blue-700 mb-4">Our support team is available 24/7 to assist you.</p>
        <Button>
          <Mail className="h-5 w-5 mr-2" />
          Contact Support
        </Button>
      </div>

      <FAQSection />
      <ContactForm />
    </div>
  );
}