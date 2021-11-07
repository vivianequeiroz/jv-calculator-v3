import { FormEvent, useEffect, useState } from 'react';

import { config } from '../../config';
import { dweetClient } from '../../services/dweetClient';

export function ShowStream() {
  const dweetThing = config.services.dweet.streamName;

  const [dweet, setDweet] = useState('');

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // calculate before
    setDweet(dweet);
    await dweetClient.createDweet(dweet);
  };

  useEffect(() => {
    const { dweetio } = window;

    dweetio.listen_for(dweetThing, function (dweet) {
      setDweet(dweet.content.expression);
    });

    () => dweetio.stop_listening_for(dweetThing);
  }, [dweetThing, setDweet]);

  return (
    <div>
      <h1>ShowStream</h1>
      <p>{dweet}</p>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          value={dweet}
          onChange={(e) => setDweet(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
