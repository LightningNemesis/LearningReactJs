import classNames from "classnames";
import useNavigation from "../hooks/use-navigation"

// to: Path we want to navigate to
// children: Text we want to render inside our Link

// GOAL of <a> element here: Clicking on link does NOT cause a total page refresh
function Link({ to, children }) {
  const { navigate } = useNavigation();

  const classes = classNames('text-blue-500')

  const handleClick = (event) => {
    // If CMD (MAC) or CTRL (Windows) key is held while clicking link, use normal browser behavior
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // Step 1: Prevent page refresh on link click (use preventDefault)
    event.preventDefault();

    // Step 2: Programmatically navigate to detination (use Navigate func ~ inside context)
    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
