import Image from 'next/image';

const PrevWork = () => {
  return (
    <section className="gallery mt-32">
      <figure className="gallery__item gallery__item--1">
        <img
          src="/gallery/1.png"
          alt="Gallery image 1"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--2">
        <img
          src="/gallery/2.png"
          alt="Gallery image 2"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--3">
        <img
          src="/gallery/3.png"
          alt="Gallery image 3"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--4">
        <img
          src="/gallery/4.png"
          alt="Gallery image 4"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--5">
        <img
          src="/gallery/5.png"
          alt="Gallery image 5"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--6">
        <img
          src="/gallery/6.png"
          alt="Gallery image 6"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--7">
        <img
          src="/gallery/7.png"
          alt="Gallery image 7"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--8">
        <img
          src="/gallery/8.png"
          alt="Gallery image 8"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--9">
        <img
          src="/gallery/9.png"
          alt="Gallery image 9"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--10">
        <img
          src="/gallery/11.png"
          alt="Gallery image 10"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--11">
        <img
          src="/gallery/12.jpeg"
          alt="Gallery image 11"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--12">
        <img
          src="/gallery/13.jpeg"
          alt="Gallery image 12"
          className="gallery__img"
          decoding="async"
          loading="lazy"
        />
      </figure>
      <figure className="gallery__item gallery__item--13">
        <img
          src="/gallery/hero.png"
          alt="Gallery image 13"
          decoding="async"
          loading="lazy"
          className="gallery__img"
        />
      </figure>
      <figure className="gallery__item gallery__item--14">
        <img
          decoding="async"
          loading="lazy"
          src="/gallery/yellow-floor.png"
          alt="Gallery image 14"
          className="gallery__img"
        />
      </figure>
    </section>
  );
};

export default PrevWork;
