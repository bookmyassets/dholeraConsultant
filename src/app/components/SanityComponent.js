   export default components = {
      types: {
        image: ({ value }) => {
          if (!value?.asset) return null;

          // Use the asset URL directly if urlFor is not working
          const imageUrl = value.asset.url || urlFor(value).width(1200).url();

          const imageNode = (
            <img
              src={imageUrl}
              alt={value.alt || ""}
              className="w-full rounded-lg my-6"
              loading="lazy"
            />
          );

          return (
            <figure className="my-6">
              {value.url ? (
                <a
                  href={value.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {imageNode}
                </a>
              ) : (
                imageNode
              )}
              {value.caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-2">
                  {value.caption}
                </figcaption>
              )}
            </figure>
          );
        },
      },

       htmlTable: ({ value }) => {
      if (!value?.html) return null;

      return (
        <div className="my-8 overflow-x-auto">
          <div 
            className="html-table-container"
            dangerouslySetInnerHTML={{ __html: value.html }}
            style={{
              // Add some basic styling to ensure tables look good
              '--table-border-color': '#e5e7eb',
              '--table-header-bg': '#f9fafb',
              '--table-row-hover': '#f3f4f6'
            }}
          />
        </div>
      );
    },


      marks: {
        link: ({ children, value }) => {
          return (
            <Link
              href={value.href}
              rel="noopener noreferrer"
              className="text-[#C69C21] hover:text-[#FDB913] underline decoration-[#FDB913]/30 hover:decoration-[#FDB913] transition-colors"
            >
              {children}
            </Link>
          );
        },
        strong: ({ children }) => (
          <strong className="font-semibold text-gray-900">{children}</strong>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-800">{children}</em>
        ),
        underline: ({ children }) => (
          <u className="underline decoration-gray-400">{children}</u>
        ),
        code: ({ children }) => (
          <code className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-sm text-gray-800">
            {children}
          </code>
        ),
        "strike-through": ({ children }) => (
          <del className="line-through text-gray-500">{children}</del>
        ),
        textColor: ({ children, value }) => (
          <span style={{ color: value?.color || "inherit" }}>{children}</span>
        ),
        textBackground: ({ children, value }) => (
          <span style={{ backgroundColor: value?.color || "transparent" }}>
            {children}
          </span>
        ),
        button: ({ children, value }) => {
          const getButtonClasses = () => {
            switch (value.style) {
              case "secondary":
                return "bg-gray-600 hover:bg-gray-700";
              case "outline":
                return "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50";
              default:
                return "bg-blue-600 hover:bg-blue-700";
            }
          };

          return (
            <Link
              href={value.href}
              className={`inline-block px-6 py-2 rounded-lg text-white font-medium transition-colors ${getButtonClasses()}`}
            >
              {value.text || children}
            </Link>
          );
        },
      },

      block: {
        h1: ({ children }) => (
          <h1 className="text-4xl font-bold mt-20 mb-8 text-gray-900 border-b border-gray-200 pb-3">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-3xl font-bold mt-16 mb-6 text-gray-800 border-b border-gray-200 pb-2">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-2xl font-semibold mt-10 mb-4 text-gray-800">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-xl font-semibold mt-8 mb-3 text-gray-800">
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h5 className="text-lg font-semibold mt-6 mb-2 text-gray-800">
            {children}
          </h5>
        ),
        h6: ({ children }) => (
          <h6 className="text-base font-semibold mt-4 mb-2 text-gray-800">
            {children}
          </h6>
        ),
        normal: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            {children}
          </p>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-yellow-500 pl-6 my-8 italic text-gray-700 py-2 bg-gray-50 rounded-r-lg shadow-sm">
            {children}
          </blockquote>
        ),
        leftAlign: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg text-left">
            {children}
          </p>
        ),
        centerAlign: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg text-center">
            {children}
          </p>
        ),
        rightAlign: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg text-right">
            {children}
          </p>
        ),
        justify: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg text-justify">
            {children}
          </p>
        ),
        small: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-base">
            {children}
          </p>
        ),
        medium: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-lg">
            {children}
          </p>
        ),
        large: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-xl">
            {children}
          </p>
        ),
        xlarge: ({ children }) => (
          <p className="mb-6 text-gray-700 leading-relaxed text-2xl">
            {children}
          </p>
        ),
      },

      list: {
        bullet: ({ children }) => (
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            {children}
          </ul>
        ),
        number: ({ children }) => (
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            {children}
          </ol>
        ),
      },

      listItem: {
        bullet: ({ children }) => (
          <li className="text-lg leading-relaxed">{children}</li>
        ),
        number: ({ children }) => (
          <li className="text-lg leading-relaxed">{children}</li>
        ),
      },
    };