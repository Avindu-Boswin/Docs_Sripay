import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { LockFilled, LoginOutlined } from '@ant-design/icons';
import Error404 from '../../assets/404';
import Logo from '../../assets/images/sripayLogo.jpg';

const NotFound = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f2f5 100%)',
      overflow: 'hidden',
      position: 'relative',
      animation: 'fadeIn 1s',
    }}
  >
    {/* Glassmorphism Card */}
    <div
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.7)',
        borderRadius: 24,
        boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        padding: '48px 40px 40px 40px',
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(30,144,255,0.12)',
        minWidth: 370,
        maxWidth: 420,
        width: '100%',
        zIndex: 2,
        textAlign: 'center',
        animation: 'slideDown 0.8s',
      }}
    >
      <img src={Logo} alt="Sripay Logo" style={{ width: 80, marginBottom: 18, borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
      <Error404 />
      <div style={{ fontSize: 48, fontWeight: 700, color: '#1e293b', marginBottom: 8, letterSpacing: 2, fontFamily: 'Montserrat, sans-serif' }}>
        404
      </div>
      <div style={{ fontSize: 22, color: '#1e293b', marginBottom: 10, fontWeight: 600, fontFamily: 'Montserrat, sans-serif', letterSpacing: 1 }}>
        Oops! Page Not Found
      </div>
      <div style={{ fontSize: 18, color: '#64748b', marginBottom: 22, fontWeight: 500 }}>
        The page you are looking for does not exist or has been moved.<br />
        <span style={{ color: '#0ea5e9', fontWeight: 600 }}>Sripay Team</span> is here to help you get back on track.
      </div>
      <Link to="/">
        <Button
          type="primary"
          size="large"
          icon={<LoginOutlined />}
          style={{
            borderRadius: 24,
            boxShadow: '0 4px 16px rgba(14,165,233,0.18)',
            fontWeight: 600,
            letterSpacing: 1,
            padding: '0 36px',
            fontSize: 18,
            background: 'linear-gradient(90deg, #0ea5e9 60%, #38bdf8 100%)',
            border: 'none',
            color: '#fff',
            transition: 'all 0.3s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #38bdf8 60%, #0ea5e9 100%)';
            e.currentTarget.style.transform = 'scale(1.04)';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(14,165,233,0.22)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg, #0ea5e9 60%, #38bdf8 100%)';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,165,233,0.18)';
          }}
        >
          Go to Sripay Home
        </Button>
      </Link>
    </div>
    {/* Decorative floating blobs */}
    <div style={{
      position: 'absolute',
      top: 60,
      left: 40,
      width: 120,
      height: 120,
      background: 'radial-gradient(circle at 40% 60%, #91d5ff 0%, #e6f7ff 100%)',
      borderRadius: '50%',
      filter: 'blur(18px)',
      opacity: 0.7,
      zIndex: 1,
      animation: 'floatBlob 6s ease-in-out infinite',
    }} />
    <div style={{
      position: 'absolute',
      bottom: 40,
      right: 60,
      width: 90,
      height: 90,
      background: 'radial-gradient(circle at 60% 40%, #bae7ff 0%, #e6f7ff 100%)',
      borderRadius: '50%',
      filter: 'blur(14px)',
      opacity: 0.6,
      zIndex: 1,
      animation: 'floatBlob2 7s ease-in-out infinite',
    }} />
    <style>
      {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(30px) scale(1.08); }
        }
        @keyframes floatBlob2 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-24px) scale(1.06); }
        }
        .lock-icon-anim {
          display: inline-block;
          animation: lockBounce 1.2s cubic-bezier(.68,-0.55,.27,1.55) 1;
        }
        @keyframes lockBounce {
          0% { transform: scale(0.7) translateY(-30px); opacity: 0; }
          60% { transform: scale(1.15) translateY(8px); opacity: 1; }
          80% { transform: scale(0.95) translateY(-4px); }
          100% { transform: scale(1) translateY(0); }
        }
      `}
    </style>
  </div>
);

export default NotFound;
