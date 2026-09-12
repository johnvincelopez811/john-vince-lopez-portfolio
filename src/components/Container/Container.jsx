/**
 * Shared page container. Every section uses this so content edges line up
 * from the Hero down to the Footer — one gutter scale, one max width.
 */
export default function Container({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
