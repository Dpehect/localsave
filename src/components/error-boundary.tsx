'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center bg-emerald-50 rounded-3xl border-2 border-dashed border-emerald-200">
          <div className="mb-4 rounded-full bg-red-100 p-3 text-red-600">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <h2 className="mb-2 text-2xl font-bold text-emerald-900">Bir şeyler yanlış gitti</h2>
          <p className="mb-6 text-emerald-600 max-w-md">
            Üzgünüz, bir hata oluştu. Sayfayı yenileyerek tekrar deneyebilirsiniz.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2 font-semibold text-white hover:bg-emerald-700 transition-all"
          >
            <RefreshCcw className="h-4 w-4" /> Sayfayı Yenile
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
