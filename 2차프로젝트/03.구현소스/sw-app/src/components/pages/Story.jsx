// 스토리 페이지 컴포넌트

import React from 'react';

// 컴포넌트 불러오기
import StoryIntro from '../modules/StoryIntro';
import Collection from '../modules/Collection';

function Story(props) {
    return (
        <>
            {/* <!-- 스토리 인트로 컴포넌트 --> */}
            <StoryIntro />

            {/* 컬렉션 컴포넌트 */}
            {/* <Collection /> */}
        </>
    );
}

export default Story;