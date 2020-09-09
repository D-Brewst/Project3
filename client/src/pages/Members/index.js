import React from "react";
import Birthdaycard from '../../components/Birthday';
import Halloweencard from '../../components/Halloween';
import Hannukahcard from '../../components/Hannukah';
import Christmascard from '../../components/Christmas';

function Members() {
  return (
    <div>
      <Birthdaycard />
      <Halloweencard />
      <Hannukahcard />
      <Christmascard />
    </div>
  )
}

export default Members;
