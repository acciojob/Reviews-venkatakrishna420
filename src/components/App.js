import Review from './Review';
import React from "react";


function App() {
  return (
    <div>
      <main>
        <section className='container'>
          <h1 id="review-heading">Our Reviews</h1>
          <Review />
        </section>
      </main>
    </div>
  );
}

export default App;

