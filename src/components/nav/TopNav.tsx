import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Navbar, Button, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/types/types";
const TopNav = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const input = useRef<HTMLInputElement>(null);
  const query = useSelector((state: IRootState) => state.query);

  useEffect(() => {
    if (query.length === 0) setOpen(false);
  }, [query]);

  return (
    <Navbar fixed='top'>
      {open ? (
        <Form
          inline
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.current) throw Error("divRef is not assigned");
            dispatch({ type: "SET_QUERY", payload: input.current.value });
            input.current.value = "";
            setOpen(false);
          }}
          className='d-flex flex-row flex-nowrap ml-auto'>
          <FormControl
            type='text'
            ref={input}
            placeholder='Search'
            className=' mr-sm-2'
          />
          <Button
            variant='light'
            onClick={() => {
              if (!input.current) throw Error("divRef is not assigned");
              dispatch({ type: "SET_QUERY", payload: input.current.value });
              input.current.value = "";
              setOpen(false);
            }}>
            {" "}
            <BsSearch />
          </Button>
        </Form>
      ) : (
        <Button
          variant='light'
          className='ml-auto'
          onClick={() => setOpen(true)}>
          <BsSearch />
        </Button>
      )}
    </Navbar>
  );
};

export default TopNav;
