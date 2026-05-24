import Image from "next/image";

export const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold tracking-tight" {...props} />
  ),

  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="leading-7 text-muted-foreground not-first:mt-6" {...props} />
  ),

  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="font-medium text-blue-500 underline underline-offset-4"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),

  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className="my-6 ml-6 list-disc" {...props} />
  ),

  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 ml-6 list-decimal" {...props} />
  ),

  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li className="mt-2" {...props} />
  ),

  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-2 pl-6 italic text-muted-foreground"
      {...props}
    />
  ),

  code: (props: React.ComponentPropsWithoutRef<"code">) => (
    <code className="rounded px-1 py-0.5 font-mono text-sm" {...props} />
  ),

  hr: (props: React.HTMLProps<HTMLHRElement>) => (
    <hr className="my-8 border-border" {...props} />
  ),

  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),

  thead: (props: React.ComponentPropsWithoutRef<"thead">) => (
    <thead className="border-b" {...props} />
  ),

  tr: (props: React.ComponentPropsWithoutRef<"tr">) => (
    <tr className="border-b transition-colors hover:bg-muted/50" {...props} />
  ),

  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th className="h-12 px-4 text-left align-middle font-semibold" {...props} />
  ),

  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td className="p-4 align-middle text-muted-foreground" {...props} />
  ),

  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),

  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre className="not-prose overflow-x-auto rounded-xl p-4" {...props} />
  ),

  img: ({ src = "", alt = "" }) => (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={630}
      className="rounded-lg"
      loading="eager"
    />
  ),
};
