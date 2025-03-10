'use client';

import { useState } from 'react';

interface BankLinkFormProps {
  onNext: (data: any) => void;
}

export default function BankLinkForm({ onNext }: BankLinkFormProps) {
  const [selectedBank, setSelectedBank] = useState<string>('');

  const banks = [
    { id: 'anz', name: 'ANZ Bank' },
    { id: 'westpac', name: 'Westpac' },
    { id: 'commbank', name: 'Commonwealth Bank' },
    { id: 'nab', name: 'National Australia Bank' },
  ];

  const handleBankSelect = (bankId: string) => {
    setSelectedBank(bankId);
    // In a real application, this would trigger the bank's OAuth flow
    onNext({ selectedBank: bankId });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Link your bank account</h2>
        <p className="text-gray-600 mb-6">
          Connect your bank account to start managing your finances
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {banks.map((bank) => (
          <button
            key={bank.id}
            onClick={() => handleBankSelect(bank.id)}
            className={`p-4 border rounded-lg text-left hover:border-blue-500 transition-colors ${
              selectedBank === bank.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{bank.name}</p>
                <p className="text-sm text-gray-500">Click to connect</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-xs text-gray-500 text-center">
          By connecting your bank account, you agree to our Terms of Service and Privacy Policy.
          Your data is encrypted and secure.
        </p>
      </div>
    </div>
  );
}