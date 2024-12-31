import { Button } from '@/components/ui/button';
import { User, Settings, CreditCard } from 'lucide-react';
import { ProfileForm } from './profile-form';
import { SubscriptionInfo } from './subscription-info';

export function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Profile Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <ProfileForm />
        </div>
        <div className="p-6">
          <SubscriptionInfo />
        </div>
      </div>
    </div>
  );
}