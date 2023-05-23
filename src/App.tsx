import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [intersecting, setIntersecting] = useState<boolean>(true);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        setIntersecting(true);
        navRef.current?.classList.add('stuck');
      } else {
        setIntersecting(false);
        navRef.current?.classList.remove('stuck');
      }
    }, observerOptions);

    if (sentinelRef.current !== null) {
      observer.observe(sentinelRef.current);
    }
  });

  return (
    <main>
      <div className="sentinel" ref={sentinelRef}></div>

      <nav ref={navRef} className="navbar">
        <h2>Hashnode Articles</h2>
        <h3>Emmanuel Oloke</h3>
      </nav>

      <div className="container">
        <section>
          <h1 className="title">Using Intersection Observer API in React</h1>
          <article className="content">
            There are different reasons to perform some functionalities or animation effects when a
            user scrolls on a web page. Examples of this could be to toggle a class, to
            conditionally render different components based on scroll or a certain element position,
            or to animate elements in and out of the viewport. There are also various ways to get
            these done; we can use scroll event listeners, scroll animation libraries, or
            Javascript's IntersectionObserver API. In this article, we will explore the benefits and
            drawbacks of these approaches and also go on to discuss further the IntersectionObserver
            API and how it can be used in React...
          </article>
        </section>

        <section>
          <h1 className="title">Building Charts with React and ChartJS</h1>
          <article className="content">
            Data visualization tools are powerful for analyzing and communicating complex data sets
            in a more accessible and intuitive way. With the advent of modern web technologies,
            creating interactive data visualizations has become easier than ever before. React and
            Chart.js are two popular technologies developers can use to create dynamic and
            interactive data visualizations...
          </article>
        </section>

        <section>
          <h1 className="title">useEffect vs useSWR</h1>
          <article className="content">
            The concept of data fetching in React applications is of high importance as it is often
            necessary to fetch data from an external source, such as an API or a database, and use
            that data to render components. React provides several ways to fetch data, including the
            built-in fetch method and popular third-party library Axios. One popular approach to
            data fetching in React is to use hooks like useEffect and useSWR from the swr
            third-party npm package. These hooks allow developers to fetch data and manage its state
            within a component, making it easy to update the UI in response to changes in the
            data...
          </article>
        </section>
      </div>
      <footer>
        <h2>Emmanuel Oloke</h2>
        <h3>&copy; 2023, All rights reserved</h3>
      </footer>
    </main>
  );
}

export default App;
