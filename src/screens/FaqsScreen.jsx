import React from "react";
import InnerBanner from "../components/common/InnerBanner";
import FrequentlyAskedQuestions from "../components/faqs/FrequentlyAskedQuestions";
import FaqSearchPannel from "../components/faqs/FaqSearchPannel";
import FaqQuestionForm from "../components/faqs/FaqQuestionForm";

const FaqsScreen = () => {
  return (
    <>
      <InnerBanner
        primaryPageName={"Faqs"}
        secondaryPageName={"Home"}
        secondaryPageUrl={"/"}
      />
      <section className="space-ptb">
        <div className="container">
          <div className="row">
            <FrequentlyAskedQuestions />
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="sidebar mb-0">
                <FaqSearchPannel />
                <FaqQuestionForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqsScreen;
