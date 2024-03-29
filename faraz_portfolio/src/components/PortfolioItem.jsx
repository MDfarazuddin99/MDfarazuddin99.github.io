const PortfolioItem = (props) => {
    console.log(props)
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    >
      <img
        src={props.imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />

      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
          {props.title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
          {props.stack.map((item, idx) => (
            <span
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
              key={idx}
            >
              {item}
            </span>
          ))}
        </p>
        <p className="text-sm text-stone-900 dark:text-white mt-4">{props.details}</p>
      </div>
    </a>
  );
};

export default PortfolioItem;
