'use client';

import React from 'react';

export default function Home() {
  return (
    <>
      {/* Estilos globales y animación de Aurora */}
      <style jsx global>{`
        :root {
          --bg-dark: #070a11;
          --card-bg: rgba(15, 23, 42, 0.65);
          --card-border: rgba(255, 255, 255, 0.08);
          --primary-accent: #00e676;
          --primary-hover: #00b359;
          --text-main: #ffffff;
          --text-muted: #94a3b8;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          background-color: var(--bg-dark);
          color: var(--text-main);
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* --- FONDO DE AURORA FLUIDA --- */
        .aurora-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          overflow: hidden;
          pointer-events: none;
          background: #070a11;
        }

        .aurora-blob {
          position: absolute;
          filter: blur(90px);
          opacity: 0.45;
          border-radius: 50%;
          animation: floatAurora 18s ease-in-out infinite alternate;
        }

        .aurora-1 {
          top: -10%;
          left: 15%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(0, 230, 118, 0.6) 0%, rgba(0, 0, 0, 0) 70%);
          animation-duration: 14s;
        }

        .aurora-2 {
          top: 20%;
          right: -10%;
          width: 45vw;
          height: 45vw;
          background: radial-gradient(circle, rgba(0, 184, 212, 0.5) 0%, rgba(0, 0, 0, 0) 70%);
          animation-duration: 20s;
          animation-delay: -5s;
        }

        .aurora-3 {
          bottom: -10%;
          left: 30%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(124, 77, 255, 0.4) 0%, rgba(0, 0, 0, 0) 70%);
          animation-duration: 25s;
          animation-delay: -10s;
        }

        @keyframes floatAurora {
          0% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          50% {
            transform: translate(60px, -40px) scale(1.1) rotate(10deg);
          }
          100% {
            transform: translate(-40px, 50px) scale(0.95) rotate(-10deg);
          }
        }

        /* Capa con grano sutil para textura elegante */
        .aurora-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 0);
          background-size: 32px 32px;
          opacity: 0.3;
        }

        /* --- ANIMACIONES Y LANDING PAGE --- */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.4); }
          70% { box-shadow: 0 0 0 18px rgba(0, 230, 118, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0); }
        }

        @keyframes textShimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }

        .landing-container {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        header.navbar-header {
          padding: 16px 0;
          border-bottom: 1px solid var(--card-border);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(7, 10, 17, 0.6);
        }

        nav.navbar-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .logo-img {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          object-fit: cover;
        }

        .logo-text {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .logo-text span {
          color: var(--primary-accent);
        }

        .hero {
          padding: 90px 0 60px;
          text-align: center;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .badge {
          background: rgba(0, 230, 118, 0.1);
          color: var(--primary-accent);
          padding: 8px 18px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 24px;
          border: 1px solid rgba(0, 230, 118, 0.25);
          backdrop-filter: blur(8px);
        }

        .hero h1 {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .gradient-text {
          background: linear-gradient(90deg, #00e676, #00b8d4, #69f0ae, #00e676);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: textShimmer 4s infinite linear;
        }

        .hero p {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 720px;
          margin: 0 auto 40px;
        }

        .btn-download {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: var(--primary-accent);
          color: #000;
          font-weight: 700;
          font-size: 1.15rem;
          padding: 18px 40px;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: pulseGlow 2.5s infinite;
        }

        .btn-download:hover {
          background-color: var(--primary-hover);
          transform: translateY(-5px) scale(1.02);
          color: #000;
        }

        .btn-download svg {
          width: 26px;
          height: 26px;
          fill: currentColor;
          transition: transform 0.3s ease;
        }

        .btn-download:hover svg {
          transform: translateY(3px);
        }

        .preview-wrapper {
          margin-top: 50px;
          perspective: 1000px;
          display: flex;
          justify-content: center;
        }

        .phone-mockup {
          width: 100%;
          max-width: 320px;
          border-radius: 32px;
          border: 1px solid var(--card-border);
          background: var(--card-bg);
          backdrop-filter: blur(16px);
          padding: 20px;
          text-align: left;
          box-shadow: 0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0, 230, 118, 0.1);
          animation: float 5s ease-in-out infinite;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .phone-mockup:hover {
          transform: rotateX(10deg) rotateY(-10deg) scale(1.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(0, 230, 118, 0.25);
        }

        .mock-card {
          background: rgba(10, 16, 28, 0.8);
          border-radius: 12px;
          padding: 15px;
          margin-top: 15px;
          border: 1px solid var(--card-border);
        }

        .stats-section {
          padding: 50px 0;
          border-top: 1px solid var(--card-border);
          border-bottom: 1px solid var(--card-border);
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(12px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          text-align: center;
        }

        .stat-number {
          font-size: 2.8rem;
          font-weight: 800;
          color: var(--primary-accent);
          transition: transform 0.3s ease;
        }

        .stats-grid > div:hover .stat-number {
          transform: scale(1.15);
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        section {
          padding: 90px 0;
        }

        .section-title {
          text-align: center;
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 60px;
          font-size: 1.05rem;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .card {
          background-color: var(--card-bg);
          backdrop-filter: blur(16px);
          border: 1px solid var(--card-border);
          padding: 35px;
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }

        .card:hover {
          transform: translateY(-10px);
          border-color: rgba(0, 230, 118, 0.4);
          box-shadow: 0 15px 35px rgba(0,0,0,0.5), 0 0 20px rgba(0, 230, 118, 0.1);
        }

        .card-icon {
          font-size: 2.2rem;
          margin-bottom: 20px;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .card:hover .card-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .card h3 {
          font-size: 1.3rem;
          margin-bottom: 12px;
        }

        .card p {
          color: var(--text-muted);
          font-size: 0.98rem;
        }

        .step-number {
          background: var(--primary-accent);
          color: #000;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .faq-item {
          background: var(--card-bg);
          backdrop-filter: blur(12px);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 24px;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: var(--primary-accent);
          transform: translateX(5px);
        }

        .faq-item h4 {
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: var(--primary-accent);
        }

        .faq-item p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        .final-cta {
          background: linear-gradient(180deg, var(--card-bg) 0%, rgba(0,230,118,0.08) 100%);
          backdrop-filter: blur(16px);
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 60px 30px;
          text-align: center;
        }

        footer {
          padding: 40px 0;
          border-top: 1px solid var(--card-border);
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
          background: rgba(7, 10, 17, 0.8);
        }

        @media (max-width: 768px) {
          .hero h1 { font-size: 2.2rem; }
        }
      `}</style>

      {/* COMPONENTE AURORA BOREAL DE FONDO */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
        <div className="aurora-overlay"></div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="landing-container">
        <header className="navbar-header">
          <div className="container">
            <nav className="navbar-nav">
              <div className="logo-container">
                <img 
                  src="/apple-touch-icon.jpg" 
                  alt="FlowPay Logo" 
                  className="logo-img" 
                />
                <div className="logo-text">
                  Flow<span>Pay</span>
                </div>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="badge">🎓 Creado para Emprendedores Universitarios</div>
            <h1>
              Conoce tu ganancia real en <br />
              <span className="gradient-text">menos de 30 segundos</span>
            </h1>
            <p>
              La primera aplicación móvil diseñada para controlar tus ventas de comida en la universidad, validar transferencias al instante y calcular la rentabilidad diaria de tu negocio.
            </p>

            <a href="flowpay-release.apk" className="btn-download" download>
              <svg viewBox="0 0 24 24">
                <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
              </svg>
              Descargar APK Gratuito (.apk)
            </a>

            {/* Mockup Interactivo */}
            <div className="preview-wrapper">
              <div className="phone-mockup">
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>VENTA RÁPIDA DE COMIDA</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '2px' }}>Chicharrines</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary-accent)' }}>$20.00 MXN</div>

                <div className="mock-card">
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>¿Cómo te pagaron?</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.9rem' }}>
                    <span>💵 Efectivo</span>
                    <span style={{ color: 'var(--primary-accent)', fontWeight: 600 }}>✓ Ok</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div>
                <div className="stat-number">87%</div>
                <div className="stat-label">Cierres de caja consecutivos exitosos</div>
              </div>
              <div>
                <div className="stat-number">93%</div>
                <div className="stat-label">Comprobantes vinculados sin errores</div>
              </div>
              <div>
                <div className="stat-number">95%</div>
                <div className="stat-label">Reducción de tiempo en cierre de caja</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section>
          <div className="container">
            <h2 className="section-title">¿Por qué usar FlowPay en tus recesos?</h2>
            <p className="section-subtitle">
              Operar durante recesos de 20 a 40 minutos es rápido y caótico. FlowPay soluciona los dos mayores problemas contables de la venta universitaria.
            </p>

            <div className="grid-3">
              <div className="card">
                <div className="card-icon">💸</div>
                <h3>No confundas Ventas con Ganancia</h3>
                <p>
                  Si inviertes $180 y vendes $600, no ganaste $600. FlowPay descuenta tu inversión automáticamente para mostrarte tus <strong>$420 de ganancia real</strong>.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">📸</div>
                <h3>Protección contra Falsas Transferencias</h3>
                <p>
                  Captura el comprobante fotográfico de cobros por SPEI o CoDi al instante. Mantén un respaldo visual propio vinculado a cada pedido.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">⏱️</div>
                <h3>Cierre de Caja ultra rápido</h3>
                <p>
                  Olvídate de cuadrar cuentas en libretas o Excel al terminar la jornada. Genera un diagnóstico completo en menos de medio minuto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ background: 'rgba(15, 23, 42, 0.2)' }}>
          <div className="container">
            <h2 className="section-title">¿Cómo funciona?</h2>
            <p className="section-subtitle">Tres pasos para mantener tus cuentas en orden durante las horas de clase.</p>

            <div className="grid-3">
              <div className="card">
                <div className="step-number">1</div>
                <h3>Ingresa tu Inversión</h3>
                <p>Al iniciar el día, registra cuánto dinero gastaste en ingredientes y materia prima para la jornada.</p>
              </div>
              <div className="card">
                <div className="step-number">2</div>
                <h3>Registra Ventas en 1 Toque</h3>
                <p>Selecciona el producto vendible y el método de pago (Efectivo o Transferencia con foto).</p>
              </div>
              <div className="card">
                <div className="step-number">3</div>
                <h3>Cierra y Analiza</h3>
                <p>Obtén el resumen inmediato con tus ventas totales, inversión recuperada y utilidad limpia del día.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="container">
            <h2 className="section-title">Preguntas Frecuentes</h2>
            <p className="section-subtitle">Todo lo que necesitas saber antes de instalar.</p>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="faq-item">
                <h4>¿Cómo instalo el archivo APK en mi teléfono Android?</h4>
                <p>
                  Simplemente presiona el botón de descarga. Al finalizar, abre el archivo descargado. Si tu teléfono te pide permiso para "Instalar aplicaciones de fuentes desconocidas", acéptalo y continúa con la instalación normalmente.
                </p>
              </div>
              <div className="faq-item">
                <h4>¿La aplicación necesita conexión a Internet?</h4>
                <p>
                  FlowPay cuenta con una arquitectura optimizada para registrar ventas de manera rápida y sincronizar tus datos de forma segura mediante nuestra API REST.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Banner */}
        <section>
          <div className="container">
            <div className="final-cta">
              <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>¿Listo para profesionalizar tu micronegocio?</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Descarga FlowPay hoy y comienza a tomar decisiones basadas en ganancias reales.
              </p>
              <a href="flowpay-release.apk" className="btn-download" download>
                <svg viewBox="0 0 24 24">
                  <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                </svg>
                Descargar APK
              </a>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <p>&copy; FlowPay - Plataforma Móvil para Micronegocios de Comida Estudiantil.</p>
          </div>
        </footer>
      </div>
    </>
  );
}