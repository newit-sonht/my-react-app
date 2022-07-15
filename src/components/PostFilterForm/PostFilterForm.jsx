import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeOutRef = useRef(null);

  function handleSetSearchTerm(e) {
    const value = e.target.value;
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: value,
      };
      onSubmit(formValue);
    }, 300);
  }

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSetSearchTerm} />
    </form>
  );
}

export default PostFilterForm;
