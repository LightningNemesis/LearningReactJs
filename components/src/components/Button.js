import className from "classnames";

function Buttons({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center mx-1.5 my-1.5 px-3 py-1.5 border",
    {
      "border-violet-500 bg-violet-400 text-white": primary,
      "border-gray-900 bg-grey-900 text-slate-900": secondary,
      "border-green-500 bg-green-400 text-white": success,
      "border-yellow-500 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-400 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-violet-500": outline && primary,
      "text-slate-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  // Margin -> Padding -> Border Width -> Border Color -> Background Color -> Text color
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Buttons.propTypes = {
  checkPurposeValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1)
      return Error(
        "Only 1 of purpose types (primary, secondary, success, warning, danger) can be TRUE"
      );
  },
};

export default Buttons;
