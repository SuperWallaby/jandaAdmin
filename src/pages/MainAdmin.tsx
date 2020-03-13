import React, { Fragment, useState } from "react";
import {hooks} from "@janda-com/front"

interface IProps {}

const MainAdmin: React.FC<IProps> = () => {
  interface Iprops {
    page: number;
    setPage: any;
    houseData: any;
    loading: boolean;
    userModal: IUseModal;
    pageData: IPageInfo;
  }

  const SuperMain: React.SFC<Iprops> = ({
    context,
    userModal,
    houseData,
    loading,
    pageData,

    setPage
  }) => {
    const NotiModalHook = useModal<ICreateNotiModalParam>(false);
    return (
      <div id="superMain">
        <div className="container container--full">
          <div className="docs-section">
            <Fragment>
              <div className="docs-section__box">
                <div>
                  <Button thema="white" label={LANG("pay_history")} />
                  <Button
                    onClick={() => {
                      NotiModalHook.openModal({
                        target: NotiType.TO_ALL
                      });
                    }}
                    thema="white"
                    label={LANG("group_notification")}
                    icon="notify"
                  />
                </div>
                <Preloader size="large" noAnimation loading={loading} />
                {houseData.map((house: Ihouse) => (
                  <HouseCard
                    context={context}
                    key={`houseCard${house._id}`}
                    houseData={house}
                    NotiModalHook={NotiModalHook}
                    userModal={userModal}
                  />
                ))}
              </div>
              <JDPagination setPage={setPage} pageInfo={pageData} />
              {userModal.isOpen && (
                <UserModal context={context} modalHook={userModal} />
              )}
            </Fragment>
            {!isEmpty(context.house) && (
              <CreateNotiModalWrap
                context={context}
                modalHook={NotiModalHook}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  export default SuperMain;
};

export default MainAdmin;
