import React from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import ruRu from 'antd/locale/ru_Ru';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/providers';
import { PublicRoute } from '@/components';
import { AuthPage } from '@/pages/auth';
import { MainLayout } from '@/layouts';
import './assets/styles/main.scss'
import { Dashboard } from './pages/dashboard';
import { KpPage } from './pages/kp-page';


const { defaultAlgorithm } = antdTheme;

interface Props {
  className?: string;
}

export const App: React.FC<Props> = () => {
  return (
    <ConfigProvider
      locale={ruRu}
      theme={{
        algorithm: defaultAlgorithm,
        token: {
          colorPrimary: '#6c63ff',
          colorLink: '#7265e6',
          colorBgContainer: '#fafafa',
          colorTextBase: '#1f1f1f',
          borderRadius: 8,
          fontFamily: `'Inter', 'Segoe UI', sans-serif`,
        },
        components: {
          Button: {
            colorPrimaryHover: '#7b73ff',
            colorPrimaryActive: '#5a50e6',
          },
          Input: {
            colorBorder: '#c7c7e6',
            //colorBorderHover: '#7a73ff',
          },
          Card: {
            colorBorderSecondary: '#e3e3f0',
          },
        },
      }}
    >
      <BrowserRouter>
        <AuthProvider>
          <div className="main-app">
            <Routes>
              {/* --------- Роуты без лейаута --------- */}
              <Route
                path="/auth"
                element={
                  <PublicRoute>
                    <AuthPage />
                  </PublicRoute>
                }
              />


              {/* --------- Роуты с лейаутом --------- */}
              <Route element={<MainLayout />}>
                <Route
                  path="/"
                  element={
                    <PublicRoute>
                      <Dashboard />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/kp"
                  element={
                    <PublicRoute>
                      <KpPage />
                    </PublicRoute>
                  }
                />
              </Route>
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
};