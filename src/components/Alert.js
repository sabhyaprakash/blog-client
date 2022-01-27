import React from 'react';

export default function Alert(props) {
  return <div>
 <div class="alert alert-success alert-dismissible fade show" role="alert" style={{marginTop: '1vh'}}>
  <strong>{props.message}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </div>;
}
