
const Options = (props) => {
  const handleChange = ev => {
    props.handleWord(ev.target.value);
  };

  return (
    <>
      <div>Estas son las opciones del juego</div>;
      <form>
        <label className="title" forHtml="word">
          Escribe aquí la palabra que hay que adivinar:
        </label>
        <input
          autofocus
          autocomplete="off"
          class="form__input"
          maxlength="15"
          type="text"
          id="word"
          name="word"
          value={props.word}
          onChange={handleChange}
        />
      </form>
    </>)
};

export default Options;
