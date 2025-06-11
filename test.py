import cv2
cap = cv2.VideoCapture(0)
while True:
        _, frame = cap.read()
        r = frame[:, :, 2]
        b = frame[:, :, 1]
        g = frame[:, :, 0]
        mask_r = (r>160) & (g<50) &(b<50)
        cv2.imshow('Frame', frame)
        cv2.imshow('Mask', mask_r*1.0)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break