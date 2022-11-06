import Image from "next/image";

import img_blog1 from "/public/assets/images/blog/blog1.jpg";
import img_blog2 from "/public/assets/images/blog/blog2.jpg";
import img_blog3 from "/public/assets/images/blog/blog3.jpg";
import img_news1 from "/public/assets/images/shap/news_memphis1.png";
import img_news2 from "/public/assets/images/shap/news_memphis2.png";

export default function LandingNews(props) {
  return (
    <section className="ts-blog section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-title">
              <span>Info Update</span>
              Latest News
            </h2>
          </div>
        </div>

        <div className="row">
          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="400ms"
          >
            <div className="post">
              <div className="post-media post-image">
                <a href="#">
                  <Image src={img_blog1} className="img-fluid" alt="" />
                </a>
              </div>

              <div className="post-body">
                <div className="post-meta">
                  <span className="post-author">
                    <a href="#">BY Admin</a>
                  </span>

                  <div className="post-meta-date">October 8, 2018</div>
                </div>
                <div className="entry-header">
                  <h2 className="entry-title">
                    <a href="#">Check upcoming Events</a>
                  </h2>
                </div>

                <div className="entry-content">
                  <p>
                    How you transform your business asap technology, consumer,
                  </p>
                </div>

                <div className="post-footer">
                  <a href="news-single.html" className="btn-link">
                    Read More <i className="icon icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="500ms"
          >
            <div className="post">
              <div className="post-media post-image">
                <a href="#">
                  <Image src={img_blog2} className="img-fluid" alt="" />
                </a>
              </div>

              <div className="post-body">
                <div className="post-meta">
                  <span className="post-author">
                    <a href="#">BY Admin</a>
                  </span>

                  <div className="post-meta-date">October 8, 2018</div>
                </div>
                <div className="entry-header">
                  <h2 className="entry-title">
                    <a href="#">Adding a New Digital</a>
                  </h2>
                </div>

                <div className="entry-content">
                  <p>
                    How you transform your business asap technology, consumer,
                  </p>
                </div>

                <div className="post-footer">
                  <a href="news-single.html" className="btn-link">
                    Read More <i className="icon icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="600ms"
          >
            <div className="post">
              <div className="post-media post-image">
                <a href="#">
                  <Image src={img_blog3} className="img-fluid" alt="" />
                </a>
              </div>

              <div className="post-body">
                <div className="post-meta">
                  <span className="post-author">
                    <a href="#">BY Admin</a>
                  </span>

                  <div className="post-meta-date">October 8, 2018</div>
                </div>
                <div className="entry-header">
                  <h2 className="entry-title">
                    <a href="#">West Elm At Evantor</a>
                  </h2>
                </div>

                <div className="entry-content">
                  <p>
                    How you transform your business asap technology, consumer,
                  </p>
                </div>

                <div className="post-footer">
                  <a href="news-single.html" className="btn-link">
                    Read More <i className="icon icon-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="speaker-shap">
        <Image className="shap2" src={img_news1} alt="" />
        <Image className="shap1" src={img_news2} alt="" />
      </div>
    </section>
  );
}
