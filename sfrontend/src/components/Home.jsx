import React from 'react';

const Home = () => {
  return (
    <div 
        style={{ 
            maxWidth: 1300, 
            margin: 'auto', 
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", 
            padding: '3rem 1rem',
            backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20231219/pngtree-colorful-study-desktop-simple-background-for-the-beginning-of-school-season-image_15522740.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            color: 'black',
        }}>
    <div
     style={{ maxWidth: 960, margin: 'auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: '3rem 1rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Welcome to SkillStack</h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>
          Your personal skill-building tracker for courses, tutorials, and certifications.
        </p>
      </header>

      <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem' }}>
        <FeatureCard 
          title="Add Learning Goals"
          description="Easily add skills you're learning with resource types and platforms."
          icon="🎯"
        />
        <FeatureCard 
          title="Track Your Progress"
          description="Mark status, hours spent, difficulty, and add notes for each skill."
          icon="📊"
        />
        <FeatureCard 
          title="Study effectively"
          description="Visualize your skill growth and get category-wise progress breakdowns."
          icon="📈"
        />
        <FeatureCard 
          title="More Features"
          description="Get recommendations, summaries, and mastery predictions."
          icon="🤖"
        />
      </section>

      <section style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Get Started</h2>
        <p style={{ fontSize: '1.1rem', color: '#777', maxWidth: 600, margin: 'auto' }}>
          Start adding your learning goals and track your journey to skill mastery effortlessly.
        </p>
        <button 
          style={{ marginTop: '1.5rem', padding: '0.75rem 2rem', fontSize: '1.1rem', borderRadius: 6, border: 'none', backgroundColor: '#0078D7', color: 'white', cursor: 'pointer' }}
          onClick={() => alert("Navigate to Add Skill Form")}
        >
          Add Your First Skill
        </button>
      </section>
    </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div 
      style={{
        flex: '1 1 220px',
        background: '#f9f9f9',
        borderRadius: 12,
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        textAlign: 'center',
        minWidth: 220,
        maxWidth: 300,
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ color: '#555', lineHeight: 1.5 }}>{description}</p>
    </div>
  );
};

export default Home;
