import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce molestie
        cursus est eget tempus. Donec laoreet tortor eget diam scelerisque, eget
        bibendum tortor dignissim. Praesent mollis semper imperdiet. Sed id odio
        non elit semper pharetra. Suspendisse egestas ut tortor vel ornare.
        Morbi a risus est. Maecenas fringilla vitae tortor eget finibus. Nullam
        quis congue leo. Maecenas massa arcu, pharetra facilisis mi ac,
        ultricies condimentum elit. Vivamus bibendum, nulla id consequat
        iaculis, purus arcu consequat ligula, ac eleifend eros nisl eu velit.
        Sed ultricies leo id nulla viverra commodo. Curabitur velit leo,
        lobortis quis neque feugiat, convallis gravida justo.
      </p>
    </div>
  );
}

export default ModalPage;
