import React from 'react'
import ArticleBox from './ArticleBox';

const Articles = () => {
    const articles = [
      {
        title: "The Future of AI in Healthcare",
        author: "John Doe",
        content: `Artificial Intelligence (AI) is transforming healthcare by enabling more accurate diagnoses, personalized treatment plans, and more efficient care delivery. 
    AI is used in medical imaging to detect diseases such as cancer at earlier stages, and in predictive analytics to anticipate patient needs based on data. Machine learning algorithms are assisting doctors in making more informed decisions, while AI-driven robots are performing surgeries with greater precision. 
    In the future, AI is expected to play an even bigger role in advancing medical research, reducing healthcare costs, and improving patient outcomes. However, with these advancements come challenges such as data privacy, algorithmic bias, and the need for regulatory oversight. As AI continues to evolve, it will be essential to address these challenges to fully realize its potential in healthcare.`,
        date: "2024-09-20",
        categories: ["Technology", "Healthcare", "AI"],
      },
      {
        title: "Sustainable Energy Solutions for 2030",
        author: "Jane Smith",
        content: `With climate change becoming a pressing issue, the need for sustainable energy solutions is more important than ever. 
    By 2030, renewable energy sources such as solar, wind, and hydrogen could provide most of the world's electricity needs, drastically reducing our carbon footprint. 
    Governments and corporations are investing heavily in research and development to improve the efficiency and scalability of these energy sources. 
    In addition to cleaner energy, advances in energy storage technology will be crucial in making renewable energy reliable. 
    For example, better battery systems will allow excess energy generated from wind or solar to be stored for use during periods of low production. The adoption of smart grids will further optimize energy distribution, ensuring that power is used efficiently across cities and countries. 
    The transition to sustainable energy will also create jobs, stimulate economic growth, and contribute to a healthier environment.`,
        date: "2024-08-15",
        categories: ["Environment", "Energy", "Sustainability"],
      },
      {
        title: "Exploring the Cosmos: New Discoveries in Astronomy",
        author: "Alice Johnson",
        content: `Astronomy continues to captivate us with new discoveries about the universe. 
    From the detection of exoplanets to the study of black holes, our understanding of space is expanding at an unprecedented rate. 
    Telescopes like the James Webb Space Telescope are providing clearer images of distant galaxies, allowing us to peer into the early history of the universe. 
    At the same time, astronomers are discovering new planetary systems that could potentially support life. 
    Research into dark matter and dark energy is also yielding new insights into the fundamental forces that shape the cosmos. 
    These discoveries are not only fascinating but also help us answer fundamental questions about the origins of the universe, our place within it, and the future of space exploration.`,
        date: "2024-09-05",
        categories: ["Science", "Space", "Astronomy"],
      },
      {
        title: "The Rise of Quantum Computing",
        author: "Michael Lee",
        content: `Quantum computing is set to revolutionize industries by solving complex problems that are beyond the capabilities of classical computers. 
    Unlike traditional computers that use bits to process information as 0s and 1s, quantum computers use quantum bits, or qubits, which can represent multiple states simultaneously. 
    This allows quantum computers to perform multiple calculations at once, drastically speeding up processes like drug discovery, cryptography, and optimization problems. 
    However, building and maintaining stable quantum computers is still a significant challenge, as they are extremely sensitive to environmental factors. 
    As the technology matures, we may soon see real-world applications of quantum computing, transforming fields such as finance, materials science, and artificial intelligence.`,
        date: "2024-07-30",
        categories: ["Technology", "Quantum Computing", "Innovation"],
      },
      {
        title: "The Evolution of Remote Work Culture",
        author: "Samantha Green",
        content: `Remote work has become a staple of the modern workforce, especially following the global pandemic. 
    What started as a temporary solution has now evolved into a long-term trend, with many companies adopting hybrid or fully remote work models. 
    This shift has led to a rethinking of how companies manage teams, measure productivity, and maintain corporate culture. 
    Technology plays a key role in this transformation, with tools like video conferencing, project management software, and cloud-based collaboration platforms enabling seamless remote communication. 
    However, there are challenges, such as maintaining employee engagement, preventing burnout, and ensuring work-life balance. 
    As remote work becomes more widespread, companies will need to adapt their policies and technologies to support this new way of working.`,
        date: "2024-06-25",
        categories: ["Business", "Remote Work", "Technology"],
      },
      {
        title: "The Impact of Social Media on Mental Health",
        author: "Emily Davis",
        content: `Social media has revolutionized the way we communicate, share information, and stay connected. 
    However, its impact on mental health has been a growing concern. 
    Studies have shown that excessive use of social media can lead to increased anxiety, depression, and feelings of isolation, particularly among younger users. 
    The constant comparison to others' curated lives, fear of missing out (FOMO), and exposure to cyberbullying can exacerbate these issues. 
    On the other hand, social media also provides platforms for support communities and mental health awareness campaigns. 
    Balancing the benefits and risks of social media use requires awareness and strategies to promote healthier online behaviors, such as setting usage limits and engaging in positive content.`,
        date: "2024-08-10",
        categories: ["Health", "Social Media", "Mental Health"],
      },
    ];
  return (
    <div className='m-6'>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
          {articles.map((article) => (
            <ArticleBox key={article.title} article={article} />
          ))}
        </div>
    </div>
  );
}

export default Articles
