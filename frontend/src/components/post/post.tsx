import React, { FC } from 'react';
import { CommentIcon, HeartIcon, SendIcon, StarIcon } from '../icons';
import './post.css';

interface PostProps {
	postData: postDataProps | undefined;
}

interface postDataProps {
	name: string;
	username: string;
	profilePicture: string;

	images: string;
	caption: string;
	time: string;

	likes: [];
	comments: [];
}

export const Post: FC<PostProps> = ({ postData }) => {
	const {
		name,
		username,
		profilePicture,

		images,
		caption,
		time,

		likes,
		comments,
	} = (postData as postDataProps) || {};

	return (
		<div className="post">
			<div className="post__preview">
				<div className="post__preview__container">
					<div className="post__preview__author">
						<div
							className="post__preview__author__avatar"
							style={{
								background: `url(${profilePicture}) center center / cover no-repeat`,
							}}
						></div>
						<div className="post__preview__author__body">
							<div className="post__preview__author__body__name">
								{name ? name : username}
							</div>
							<div className="post__preview__author__body__username">
								{username}
							</div>
						</div>
					</div>

					<div className="post__preview__content">
						<img
							className="post__preview__content-image"
							src=""
							alt=""
						/>

						<div className="post__preview__content-action">
							<div className="post__preview__content-action__icon">
								<HeartIcon />
							</div>
							<div className="post__preview__content-action__wrapper">
								<div className="post__preview__content-action__icon">
									<SendIcon />
								</div>
								<div className="post__preview__content-action__icon">
									<CommentIcon />
								</div>
								<div className="post__preview__content-action__icon">
									<StarIcon />
								</div>
							</div>
						</div>
					</div>

					<div className="post__content-text">
						<div className="post__content-text__likes">
							<div className="post__content-text__likes-amount">
								27
							</div>
							<div className="post__content-text__likes-text">
								Likes
							</div>
						</div>

						<div className="post__content-text__body">
							Next Project is coming soon, stay tuned!
						</div>

						<div className="post__content-text__time">
							2 Hours Ago
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
