import React from "react";
import AvatarImg01 from "../../assets/images/avatar/01.jpg";
import AvatarImg02 from "../../assets/images/avatar/02.jpg";
import AvatarImg04 from "../../assets/images/avatar/04.jpg";

const Comments = () => {
  return (
    <>
      <div className="d-sm-flex mb-3">
        <div className="d-flex flex-shrink-0 media mb-3 mb-sm-0 avatar avatar-lg">
          <img
            src={AvatarImg01}
            className="img-fluid rounded-circle"
            alt="..."
          />
        </div>
        <div className="flex-grow-1 media-body ms-sm-3 border p-4">
          <div className="d-flex">
            <h6 className="mt-0">Rafael Briggs</h6>
            <a className="ms-auto" href="#">
              <i className="fas fa-reply pe-2"></i>Reply
            </a>
          </div>
          <p className="mb-0">
            Then work backwards to develop the plan. What steps are required to
            get you to the goals? Make the plan as detailed as possible. Try to
            visualize and then plan.
          </p>
        </div>
      </div>
      <div className="d-sm-flex mb-3 ms-3 ms-sm-5">
        <div className="d-flex flex-shrink-0 media mb-3 mb-sm-0  avatar avatar-lg">
          <img
            src={AvatarImg02}
            className="img-fluid rounded-circle"
            alt="..."
          />
        </div>
        <div className="flex-grow-1 media-body ms-sm-3 border p-4">
          <div className="d-flex">
            <h6 className="mt-0">Roderick Moss</h6>
            <a className="ms-auto" href="#">
              <i className="fas fa-reply pe-2"></i>Reply
            </a>
          </div>
          <p className="mb-0">
            Every possible setback. Commit the plan to paper and then keep it
            with you at all times. Review it regularly and ensure that every
            step takes you closer.
          </p>
        </div>
      </div>
      <div className="d-sm-flex media mb-3 ms-3 ms-sm-5">
        <div className="d-flex flex-shrink-0 media mb-3 mb-sm-0  avatar avatar-lg">
          <img
            src={AvatarImg01}
            className="img-fluid rounded-circle"
            alt="..."
          />
        </div>
        <div className="media-body ms-sm-3 border p-4">
          <div className="d-flex">
            <h6 className="mt-0">Rafael Briggs</h6>
            <a className="ms-auto" href="#">
              <i className="fas fa-reply pe-2"></i>Reply
            </a>
          </div>
          <p className="mb-0">
            Along with your plans, you should consider developing an action
            orientation that will keep you motivated to move forward at all
            times. This requires a little self-discipline.
          </p>
        </div>
      </div>
      <div className="d-sm-flex media mb-3 ms-3 ms-sm-5">
        <div className="d-flex flex-shrink-0 media mb-3 mb-sm-0  avatar avatar-lg">
          <img
            src={AvatarImg04}
            className="img-fluid rounded-circle"
            alt="..."
          />
        </div>
        <div className="media-body ms-sm-3 border p-4">
          <div className="d-flex">
            <h6 className="mt-0">Nichole Haynes</h6>
            <a className="ms-auto" href="#">
              <i className="fas fa-reply pe-2"></i>Reply
            </a>
          </div>
          <p className="mb-0">
            But is a crucial component to achievement of any kind. Before
            starting any new activity, ask yourself if that activity will move
            you closer to your goals. If the answer is no.
          </p>
        </div>
      </div>
    </>
  );
};

export default Comments;
