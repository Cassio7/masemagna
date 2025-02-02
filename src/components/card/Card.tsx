import "./card.css";

type CardProps = {
  title: string;
  image: string;
  img_alt: string;
  description: string;
};

export default function Card(card: CardProps) {
  return (
    <div class="card w-80 shadow-lg border-2 rounded-md">
      <div class="card-body items-center text-center">
        <h2 class="card-title card-title-style">{card.title}</h2>
      </div>
      <figure class="px-10">
        <img
          src={card.image}
          alt="ramen"
          class="rounded-xl"
          width="138"
          height="138"
        />
      </figure>
      <div class="card-body items-center text-center">
        <p class="card-under-style">{card.description}</p>
      </div>
    </div>
  );
}
